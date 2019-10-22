//@flow

export interface IScreen {
  name: string;
  component: React$StatelessFunctionalComponent<any>;
  icon: (color: string) => React$Element<any>;
}
