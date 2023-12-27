declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

declare module "react-use-flexsearch";
declare module "formik";
declare module "*.gif";
declare module "*.png";
