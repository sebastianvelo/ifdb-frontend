import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";
import ActionItem from "./content/action/ActionItem";

export interface MenuItemContentProps {
    opened: boolean;
    ModalTrigger: () => JSX.Element;
    action: (requiresConfirmation?: boolean) => void;
    setOpen: (value: boolean) => void;
}

const MenuItemContent: FunctionComponent<MenuItemContentProps> = (props: MenuItemContentProps) => {
    const menuContentClassName = Tailwind.builder()
        .addIf("hidden", !props.opened)
        .addIf("flex justify-between bg-secondary absolute bottom-0 right-12 z-40 rounded-sm h-10", props.opened)
        .build();

    return (
        <div className={menuContentClassName} onMouseLeave={() => props.setOpen(false)}>
            <ActionItem {...props} />
            <props.ModalTrigger />
        </div>
    );
}

export default MenuItemContent;