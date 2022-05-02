import { ProjectHelper } from "../../data/helper";

const Container: React.FC<{
    containerId?: string | undefined;
  containerClass: string;
  sectionClass: string;
  children: JSX.Element;
}> = ({ containerId, containerClass, sectionClass, children }) => {
  return (
    <div id={containerId} className={containerClass}>
      <section
        className={ProjectHelper.onStateChangeClassJoin(
          "px-8 py-24 lg:py-32 md:px-12 lg:px-16 xl:px-20 2xl:px-24 transition-all",
          sectionClass
        )}
      >
        {children}
      </section>
    </div>
  );
};

export default Container;
