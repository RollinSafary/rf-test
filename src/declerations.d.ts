declare module '*.svg' {
  import { ReactComponent } from 'react';
  const content: ReactComponent;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
