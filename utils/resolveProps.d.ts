interface IProps {
  [key: string]: any;
}

declare const resolveProps: (props: IProps, contextProps: IProps) => IProps;

export default resolveProps;
