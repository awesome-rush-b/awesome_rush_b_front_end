import MarkdownIt from "markdown-it";

/**
 *
 *
 * @export convertMdToHtmlString
 * @param {*} markdownContent
 * @return {*} converted html string from the input markdownContent
 */
export function convertMdToHtmlString(markdownContent) {
  var md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  return md.render(markdownContent);
}
