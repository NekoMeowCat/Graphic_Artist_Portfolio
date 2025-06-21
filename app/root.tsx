import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    let mounted = true;

    const initPreline = async () => {
      try {
        if (typeof window !== "undefined" && mounted) {
          // Load third-party libraries and Preline
          const [
            $,
            _,
            noUiSlider,
            datatables,
            dropzone,
            VanillaCalendarPro,
            preline,
          ] = await Promise.all([
            import("jquery"),
            import("lodash"),
            import("nouislider"),
            import("datatables.net"),
            import("dropzone/dist/dropzone-min.js"),
            import("vanilla-calendar-pro"),
            import("preline/dist"),
          ]);

          window._ = _.default;
          window.$ = $.default;
          window.jQuery = $.default;
          window.DataTable = $.default.fn.dataTable;
          window.noUiSlider = noUiSlider.default;
          window.VanillaCalendarPro = VanillaCalendarPro;

          if (window.HSStaticMethods && mounted) {
            window.HSStaticMethods.autoInit();
          }
        }
      } catch (error) {
        console.error("Failed to initialize dependencies:", error);
      }
    };

    initPreline();

    return () => {
      mounted = false;
    };
  }, [location.pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
