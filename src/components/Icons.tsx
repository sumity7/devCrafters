import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 20, strokeWidth = 2, children, ...rest }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const CheckIcon = (p: IconProps) => (
  <Icon strokeWidth={2.6} {...p}><polyline points="20 6 9 17 4 12" /></Icon>
);

export const CodeIcon = (p: IconProps) => (
  <Icon stroke="#fff" strokeWidth={2.4} {...p}>
    <polyline points="8 6 3 12 8 18" /><polyline points="16 6 21 12 16 18" /><line x1="13.5" y1="4" x2="10.5" y2="20" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon strokeWidth={2.2} {...p}>
    <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
  </Icon>
);

export const CloseIcon = (p: IconProps) => (
  <Icon strokeWidth={2.2} {...p}><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></Icon>
);

export const CartIcon = (p: IconProps) => (
  <Icon strokeWidth={2.2} {...p}>
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </Icon>
);

export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z" />
  </Icon>
);

export const ChatIcon = (p: IconProps) => (
  <Icon {...p}><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></Icon>
);

export const MailIcon = (p: IconProps) => (
  <Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22 6 12 13 2 6" /></Icon>
);

export const GlobeIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </Icon>
);

export const WhatsAppIcon = (p: IconProps) => (
  <Icon stroke="#fff" {...p}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
    <path d="M9 9.5c.3 1.6 1.9 3.4 3.6 4 .6.2 1.1-.6 1.5-1l1.5.8c-.2.9-1.1 1.6-2 1.5-2.6-.3-5-2.7-5.3-5.3-.1-.9.6-1.8 1.5-2l.8 1.5c-.4.4-1.2.9-1.6.5z" />
  </Icon>
);
