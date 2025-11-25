// todo: make onchange not optional
interface InputType { 
    onChange?: () => void;
    placeholder: string;
	ref?: any;
}

export default function Input({ onChange, placeholder, ref }:InputType) {
	return (
		<div>
			<input
				ref={ref}
				placeholder={placeholder}
				type="text"
				className="px-4 py-2 border rounded-md m-2"
				onChange={onChange}></input>
		</div>
	);
}