import clsx from 'clsx';

interface InputProps {
    className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
    return (
        <input
            className={clsx('border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full', className)}
            {...props}
        />
    );
};

export default Input;
