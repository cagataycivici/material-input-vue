export default {
    root: ({ context }) => ({
        class: [
            // Font
            "font-sans leading-none px-2.5 pb-2.5 pt-5",

            // Colors
            "text-primary-600 dark:text-primary-300",
            "placeholder:text-primary-400 dark:placeholder:text-primary-400/60",
            "bg-primary-50 dark:bg-primary-400/10",
            "border-b-2 border-primary-400 dark:border-primary-400/60",

            // States
            {
                "hover:border-primary-500 dark:hover:border-primary-400":
                    !context.disabled,
                "focus:outline-none focus:border-primary-600 dark:focus:border-primary-300":
                    !context.disabled,
                "opacity-60 select-none pointer-events-none cursor-default":
                    context.disabled,
            },

            // Misc
            "rounded-none",
            "appearance-none",
            "transition-colors duration-200",
        ],
    }),
};
