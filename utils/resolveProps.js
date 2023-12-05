const resolveProps = (props, contextProps) => {
  Object.keys(contextProps).forEach((key) => {
    if (props[key] === undefined && contextProps[key] !== undefined) {
      props[key] = contextProps[key];
    }
  });

  return props;
};

export default resolveProps;
