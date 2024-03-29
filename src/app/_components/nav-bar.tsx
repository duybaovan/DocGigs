"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { buttonVariants } from "~/components/ui/button";
import { LoginDialogButton } from "./login-dialog";

const hospitalBenefits: { title: string; href: string; description: string }[] =
  [
    {
      title: "Reduced Staffing Shortages",
      href: "/benefits/reduced-staffing-shortages",
      description:
        "Our staffing solution minimizes the impact of physician shortages by providing qualified doctors on-demand.",
    },
    {
      title: "Flexible Hiring",
      href: "/benefits/flexible-hiring",
      description:
        "Hire doctors for the exact time you need them with our flexible scheduling options.",
    },
    {
      title: "Cost-Effective",
      href: "/benefits/cost-effective",
      description:
        "Reduce overhead costs with our streamlined staffing services, avoiding the need for long-term commitments.",
    },
    {
      title: "Quality Care",
      href: "/benefits/quality-care",
      description:
        "Ensure high-quality patient care by utilizing our network of experienced and vetted physicians.",
    },
  ];

export function NavigationMenuBar({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <nav className="flex h-16 items-center justify-between bg-white px-8 text-black">
      <NavigationMenu className="flex w-full justify-between">
        <NavigationMenuList>
          {isAuthenticated && (
            <NavigationMenuItem>
              <Link href="/jobs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Job Board
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Physicians</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Why DocGigs?">
                  Learn more about why physicians are seeking additional income
                  streams
                </ListItem>
                <ListItem href="/docs/installation" title="Credentialing">
                  How to speed up the credentialing process
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Earnings Calculator"
                >
                  Figure out how much you can earn with our calculator
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Continued Education"
                >
                  Additional resources on how to further your career
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Hospitals</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {hospitalBenefits.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/api/auth/signout"}>{"Sign out"}</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <LoginDialogButton buttonTitle={"Sign In"} />
      )}
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
