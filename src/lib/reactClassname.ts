type ReactClassnameAction = (...arg: string[]) => string;
const reactClassname: ReactClassnameAction = (...args) =>
  args.filter(Boolean).join(' ');
export default reactClassname;
