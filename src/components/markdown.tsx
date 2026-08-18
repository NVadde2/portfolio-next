import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { withBasePath } from "@/lib/asset-path";

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose-portfolio prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={typeof src === "string" ? withBasePath(src) : src}
              alt={alt ?? ""}
              className="rounded-md border border-line"
            />
          ),
          a: ({ href, children }) => {
            const isExternal = /^https?:\/\//.test(href ?? "");
            return (
              <a
                href={href}
                {...(isExternal
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
