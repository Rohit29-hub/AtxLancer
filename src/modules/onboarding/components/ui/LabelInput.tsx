import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LabelInputProps = {
    label: string;
    placeholder: string;
    id: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
};

function LabelInput({
    label,
    placeholder,
    id,
    type = "text",
    value,
    onChange,
    disabled = false,
    required = false,
}: LabelInputProps) {
    return (
        <div className="w-full flex flex-col">
            <Label htmlFor={id} className="text-sm font-medium mb-2">
                {label}
            </Label>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                className="w-full"
            />
        </div>
    );
}

export default LabelInput;
