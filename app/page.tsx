import { Sidebar } from "@/components/sidebar"
import getNavLinks from "./links"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LinkContent } from "@/components/link-content"
const ansiColorCodes = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
};
export const revalidate = 24 * 60 * 60;

export default async function IndexPage() {
  const navResources = await getNavLinks();
  // console.log(ansiColorCodes.green + new Date(), "getNavResources")
  const navItems = navResources?.map(n => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  })
  return <div className="container relative mx-auto min-h-screen w-full px-0">
    <div className="flex">
      <div className="fixed z-20 hidden min-h-screen w-[16rem] transition-all duration-300 ease-in-out sm:block ">
        <Sidebar navItems={navItems} />
      </div>
      <div className="sm:pl-[16rem]">
        {/* @ts-expect-error Server Component */}
        <SiteHeader navItems={navItems} />
        <LinkContent navResources={navResources} />
        <SiteFooter />
      </div>
    </div>
  </div>
}
