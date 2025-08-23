"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Briefcase,
  Lightbulb,
  Mail,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: Home,
    description: "Inicio y proyectos destacados",
  },
  {
    href: "/about",
    label: "About",
    icon: User,
    description: "Experiencia y formación",
  },
  {
    href: "/projects",
    label: "Projects",
    icon: Briefcase,
    description: "Portfolio completo",
  },
  {
    href: "/consulting",
    label: "Consulting",
    icon: Lightbulb,
    description: "Atlas Assessment & Servicios IA",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Mail,
    description: "Conversemos sobre tu proyecto",
  },
];

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

export function Navigation({ mobile = false, onClose }: NavigationProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  if (mobile) {
    return (
      <div className="flex flex-col space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <Icon className="h-4 w-4" />
              <div className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-xs opacity-70">{item.description}</span>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
              isActive(item.href)
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>

            {/* Tooltip for desktop */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {item.description}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
