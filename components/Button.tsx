import tw, { styled, css, theme } from "twin.macro";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isSmall?: boolean;
}

const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  // The common button styles added with the tw import
  tw`px-8 py-2 duration-75 transform rounded`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  variant === "primary" && tw`text-white bg-black border-black`,

  // Combine regular css with tailwind classes within backticks
  variant === "secondary" && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-200`,
  ],

  // Conditional props can be used
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
]);

export default Button;
