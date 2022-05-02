
class Helper {
    onMobileMenuToggle(state: CallableFunction) {
        state((cur: boolean) => !cur);
    }
    onStateChangeClassJoin(...classes: string[]) {
        return classes.filter(Boolean).join(" ");
    }
}
export const ProjectHelper: Helper = new Helper();