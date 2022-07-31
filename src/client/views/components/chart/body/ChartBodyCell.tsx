import Image, { ImageProps } from "client/common/components/image/Image";
import Tailwind from "client/common/tailwind/Tailwind";
import { FunctionComponent } from "react";

const getClassName = (props: ChartBodyCellProps) => Tailwind.builder()
    .add(`bg-gradient-to-b`)
    .addIf(`bg-black text-gray-200`, props.rating === -1)
    .addIf(`from-gray-700 to-gray-800 text-gray-200`, props.rating >= 1 && props.rating < 1.5)
    .addIf(`from-gray-600 to-gray-700 text-gray-200`, props.rating >= 1.5 && props.rating < 2)
    .addIf(`from-red-900 to-red-800 text-gray-200`, props.rating >= 2 && props.rating < 2.5)
    .addIf(`from-red-800 to-red-700 text-gray-200`, props.rating >= 2.5 && props.rating < 3)
    .addIf(`from-red-700 to-red-600 text-gray-200`, props.rating >= 3 && props.rating < 3.5)
    .addIf(`from-red-600 to-red-500 text-dark`, props.rating >= 3.5 && props.rating < 4)
    .addIf(`from-red-500 to-orange-600 text-dark`, props.rating >= 4 && props.rating < 4.5)
    .addIf(`from-orange-600 to-orange-500 text-dark`, props.rating >= 4.5 && props.rating < 5)
    .addIf(`from-orange-500 to-yellow-500 text-dark`, props.rating >= 5 && props.rating < 5.5)
    .addIf(`from-yellow-500 to-yellow-400 text-dark`, props.rating >= 5.5 && props.rating < 6)
    .addIf(`from-yellow-400 to-yellow-200 text-dark`, props.rating >= 6 && props.rating < 6.5)
    .addIf(`from-yellow-200 to-green-200 text-dark`, props.rating >= 6.5 && props.rating < 7)
    .addIf(`from-green-200 to-green-300 text-dark`, props.rating >= 7 && props.rating < 7.5)
    .addIf(`from-green-300 to-green-400 text-dark`, props.rating >= 7.5 && props.rating < 8)
    .addIf(`from-green-400 to-green-500 text-dark`, props.rating >= 8 && props.rating < 8.5)
    .addIf(`from-green-500 to-teal-400 text-dark`, props.rating >= 8.5 && props.rating < 9)
    .addIf(`from-teal-400 to-teal-600 text-dark`, props.rating >= 9 && props.rating < 9.5)
    .addIf(`from-teal-600 to-blue-400 text-dark`, props.rating >= 9.5 && props.rating < 10)
    .addIf(`from-blue-400 to-blue-600 text-dark`, props.rating === 10)
    .addIf("border-primary-dark", props.isOpened)
    .addIf("border-dark", !props.isOpened)
    .add("p-2 w-full border group relative")
    .add("hover:border-primary box-border transition-all duration-300 cursor-pointer")
    .build();

const getEpisodeNameClassName = (props: ChartBodyCellProps) => Tailwind.builder()
    .add("flex opacity-0")
    .addIf("opacity-0 hidden", !props.isOpened)
    .addIf("opacity-100", props.isOpened)
    .addIf("bottom-0", !props.isTopHalf)
    .addIf("top-0", props.isTopHalf)
    .addIf("left-12", props.isLeftHalf)
    .addIf("right-12", !props.isLeftHalf)
    .add("shadow-xl")
    .add("flex-col justify-between")
    .add("duration-500 transition-all")
    .add("absolute z-20")
    .add("bg-gradient-to-tl from-secondary-dark to-black text-primary-dark")
    .add("font-bold rounded-lg w-64")
    .build();

export interface ChartBodyCellProps {
    rating: number;
    value: string;
    href: string;
    title: string;
    image: ImageProps;
    isOpened: boolean;
    toggle: () => void;
    isTopHalf?: boolean;
    isLeftHalf?: boolean;
}

const ChartBodyCell: FunctionComponent<ChartBodyCellProps> = (props: ChartBodyCellProps) => {
    const href = `${window.location.href}${props.href}`;
    return (
        <div className={getClassName(props)} onClick={props.toggle}>
            <p>{props.value}</p>
            <a href={href}  className={getEpisodeNameClassName(props)}>
                <p className="p-2">{props.title}</p>
                <Image className="w-64" {...props.image} />
            </a>
        </div>
    );
}

export default ChartBodyCell;
