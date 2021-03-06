import store from 'react-native-simple-store';
import { guid } from './uuid';
import { currentDate } from './date';

export async function printAsyncStorage() {
  const keys = await store.keys();
  return keys.map(key => store.get(key).then(value => console.log(value)));
}

export async function clearAsyncStorage() {
  const keys = await store.keys();
  return keys.map(key => store.delete(key));
}

export function getBodyParts() {
  return store.get('bodyParts');
}

export function createBodyPart(name) {
  return store.push('bodyParts', {
    id: guid(),
    name
  });
}

export async function editBodyPart(editedBodyPart) {
  let bodyParts = await store.get('bodyParts');
  bodyParts.map(bodyPart => {
    if (editedBodyPart.id === bodyPart.id) {
      bodyPart.name = editedBodyPart.name;
    }
    return bodyPart;
  });
  return await store.save('bodyParts', bodyParts);
}

export function getExercises() {
  return store.get('exercises');
}

export async function getLatestExerciseResult(id) {
  const exercises = await store.get('exercises');

  const exercise = exercises.filter(exercise => exercise.id === id);
  const results = exercise[0].results;

  if (!results) {
    return [];
  }
  const getLastResult = function(resultsLength) {
    let result = results[resultsLength - 1] || [];
    if (currentDate() === result.date) {
      return getLastResult(resultsLength - 1);
    }
    return result;
  };
  const lastResult = getLastResult(results.length);

  const latestResults = results.filter(
    result => result.date === lastResult.date
  );
  return latestResults;
}

export async function getExercisesByBodyPart(bodyPart) {
  const exercises = await store.get('exercises');
  return exercises.filter(exercise => exercise.bodyPart === bodyPart);
}

export async function getExerciseResultByDate(id, date) {
  const exercises = await store.get('exercises');
  const exerciseById = await exercises.filter(exercise => exercise.id === id);
  const { results } = Object.assign({}, ...exerciseById);
  const result = await results.filter(result => result.date === date);
  return await result;
}

export function createExercise(exercise) {
  return store.push('exercises', {
    id: guid(),
    name: exercise.name,
    bodyPart: exercise.bodyPart
  });
}

export async function addValueToExercise({
  id,
  name,
  bodyPart,
  date,
  amount,
  weight
}) {
  const exercises = await getExercises();
  await removeFromLocalStorage('exercises');
  await exercises.map(async exercise => {
    let result = {};
    if (exercise.id === id) {
      if (!exercise.results) {
        exercise.results = [];
      }
      result.id = guid();
      result.date = date;
      result.amount = amount;
      result.weight = weight;
      exercise.results.push(result);
    }
    return await exercise;
  });
  return await store.save('exercises', exercises);
}

function removeFromLocalStorage(key) {
  return store.delete(key);
}

export async function removeExerciseValue(exerciseId, resultId) {
  const exercises = await getExercises();
  await removeFromLocalStorage('exercises');
  const exercise = exercises.filter(exercise => exercise.id === exerciseId);
  const exerciseToObj = Object.assign({}, ...exercise);
  const exerciseWithRemovedResult = await Object.assign({}, exerciseToObj, {
    results: exerciseToObj.results.filter(result => result.id !== resultId)
  });
  const result = exercises.map(exercise => {
    if (exercise.id === exerciseId) {
      return exerciseWithRemovedResult;
    }
    return exercise;
  });
  return await store.save('exercises', result);
}

export function getLanguage() {
  return store.get('language');
}

export async function setLanguage(language) {
  return await store.save('language', language);
}
