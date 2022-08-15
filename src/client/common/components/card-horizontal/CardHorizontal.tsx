import Action from "client/common/atom/action/Action";
import Image, { ImageProps } from "client/common/atom/image/Image";
import Pill from "client/common/components/pill/Pill";
import ComponentColor from "client/common/tailwind/constants/ComponentColor";
import { FunctionComponent } from "react";

export interface CardHorizontalProps {
    title?: string;
    subtitle?: string;
    image?: ImageProps;
    path: string;
    tags?: string;
}

const CardHorizontal: FunctionComponent<CardHorizontalProps> = (props: CardHorizontalProps) => (
    <article className="bg-gradient-to-r dark:from-black dark:to-dark dark:text-white from-white to-light text-black flex space-x-2 shadow-lg w-full h-full">
        <Action path={props.path} revert>
            {props.image && <Image className="h-full w-16 cursor-pointer" {...props.image} />}
        </Action>
        <div className="space-y-2 flex flex-col justify-between py-2 w-72 overflow-hidden">
            <div className="space-y-2">
                <Action className={`font-bold truncate text-left`} path={props.path} label={props.title} revert />
                <p className="text-xs">{props.subtitle}</p>
            </div>
            <div className="hidden md:flex">
                {false && props.tags?.split(",").sort().slice(0, 2).map(cat => (
                    <Pill className="text-xs text-white" color={ComponentColor.SECONDARY} label={cat} />
                ))}
            </div>
        </div>
    </article>
);

export default CardHorizontal;