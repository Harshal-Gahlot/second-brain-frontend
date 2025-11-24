// todo: make onchange not optional
interface InputType { 
    onChange?: () => void;
    placeholder: string;
}
export default function Input({ onChange, placeholder }:InputType) {
	return (
		<div>
			<input
				placeholder={placeholder}
				type="text"
				className="px-4 py-2 border rounded-md m-2"
				onChange={onChange}></input>
		</div>
	);
}