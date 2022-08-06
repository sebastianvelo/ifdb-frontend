import { FunctionComponent } from "react";
import Tailwind from "client/common/tailwind/Tailwind";

interface InputProps {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: any) => void;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {
    const className = Tailwind.builder()
        .add('bg-secondary placeholder-opacity-50 placeholder-light px-4 py-2 w-full transition-color duration-500 cursor-pointer')
        .add('focus:bg-secondary focus:border-secondary focus:outline-none')
        .add('hover:bg-secondary hover:border-secondary')
        .addIf(props.className, !!props.className)
        .build();

    if (props.value)
        return (
            <input value={props.value} placeholder={props.placeholder} onChange={props.onChange} className={className} spellCheck="false" />
        );
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} className={className} spellCheck="false" />
    );
}

export default Input;