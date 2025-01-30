import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  FolderIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#", current: true, icon: <HomeIcon className="w-5 h-5" /> },
  { name: "About", href: "#hero", current: false, icon: <InformationCircleIcon className="w-5 h-5" /> },
  { name: "Services", href: "#features", current: false, icon: <BriefcaseIcon className="w-5 h-5" /> },
  { name: "Projects", href: "#projects", current: false, icon: <FolderIcon className="w-5 h-5" /> },
  { name: "Contacts", href: "#contact", current: false, icon: <PhoneIcon className="w-5 h-5" /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      <motion.div
        className="relative bg-black animate-bgGradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-white focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <motion.div
                className="hidden sm:ml-6 sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="flex space-x-6">
                  {navigation.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-blue-800 text-white"
                          : "text-gray-300 hover:bg-blue-700 hover:text-white",
                        "rounded-lg px-4 py-2 text-base font-medium flex items-center space-x-2 font-semibold font-sans"
                      )}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-blue-800 text-white"
                  : "text-gray-300 hover:bg-blue-700 hover:text-white",
                "block rounded-lg px-4 py-2 text-lg font-medium flex items-center space-x-2 font-sans"
              )}
            >
              {item.icon}
              <span>{item.name}</span>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
