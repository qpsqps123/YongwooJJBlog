declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
