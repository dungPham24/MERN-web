const textSizeSmall = { fontSize: 14, fontWeight: 500 };
const textSizeMedium = { fontSize: 15, fontWeight: 600 };
const smallStyle = {
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 3,
  paddingBottom: 3,
  minHeight: 30,
  borderRadius: 8,
};
const mediumStyle = {
  paddingLeft: 36,
  paddingRight: 36,
  paddingTop: 6,
  paddingBottom: 6,
  minHeight: 40,
  borderRadius: 8,

  ...textSizeMedium,
};
const largeStyle = {
  paddingLeft: 36,
  paddingRight: 36,
  paddingTop: 9,
  paddingBottom: 9,
  minHeight: 48,
  borderRadius: 8,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  styleOverrides: {
    root: {
      borderRadius: 8,
    },
    contained: {
      boxShadow: "none",
      ...mediumStyle,
    },
    outlined: {
      ...mediumStyle,
    },
    textSizeSmall: textSizeSmall,
    textSizeLarge: textSizeMedium,
    sizeSmall: { ...smallStyle, ...textSizeSmall },
    sizeLarge: { ...largeStyle, ...textSizeMedium },
  },
};
