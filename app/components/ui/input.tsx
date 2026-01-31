import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	startIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, error, startIcon, className = "", ...props }, ref) => {
		return (
			<div className="flex flex-col gap-1 border">
				{label && (
					<label className="text-sm font-medium text-gray-700 dark:text-gray-200">
						{label}
					</label>
				)}
				<div className="relative">
					{startIcon && (
						<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10">
							{startIcon}
						</div>
					)}
					<input
						ref={ref}
						className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 ${error ? "border-red-500" : ""} ${startIcon ? "pl-10" : ""} ${className}`}
						{...props}
					/>
				</div>
				{error && <span className="text-xs text-red-500">{error}</span>}
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
