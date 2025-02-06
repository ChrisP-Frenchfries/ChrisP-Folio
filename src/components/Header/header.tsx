import { Card } from "@/src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Section } from "../Section/Section";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "@/src/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Section>
        <div className="py-3">
          <Card className="overflow-hidden">
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between gap-4">
                {/* Logo et titre */}
                <div className="flex items-center gap-3 md:gap-4">
                  <Avatar className="h-8 w-8 md:h-10 md:w-10">
                    <AvatarImage src="/ton-image.jpg" alt="Chris P" />
                    <AvatarFallback>CP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold truncate">Christopher Pouradier</h1>
                    <p className="text-sm md:text-base text-muted-foreground hidden sm:block">Software Engineer</p>
                  </div>
                </div>

                {/* Navigation Desktop */}
                <NavigationMenu className="hidden md:block">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          /Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/projets" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          /Projetcs
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/resume" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          /Resume
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {/* Menu Mobile */}
                <Sheet>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 mt-8">
                      <Link
                        href="/"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        /Home
                      </Link>
                      <Link
                        href="/projets"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        /Projects
                      </Link>
                      <Link
                        href="/contact"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        /Contact
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </header>
  );
}