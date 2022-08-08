import { FunctionComponent } from "react";

interface ListTitleProps {
    title?: string;
    changeTitle: (title: string) => void;
    size?: number;
}

const ListTitle: FunctionComponent<ListTitleProps> = (props: ListTitleProps) =>
    <input
        className="bg-transparent text-2xl font-black focus:outline-none cursor-text w-full md:w-96 p-4"
        spellCheck="false"
        type="text"
        name={props.title}
        value={props.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.changeTitle(e.target.value)}
    />


export default ListTitle;