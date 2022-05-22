import type { RefAttributes, HTMLAttributes } from 'react';

export default interface IButton extends HTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    color?: "primary" | "secondary";
}