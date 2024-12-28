const DividerLine = () => {
    return (
        <div className="flex items-center justify-center my-6 relative">
            <span className="absolute dark:bg-background bg-white px-2 rounded-full text-gray-500 text-sm">
                OR
            </span>
            <hr className="w-full border-t border-gray-300" />
        </div>
    )
}

export default DividerLine