/**
 * 在光标后插入文本
 * 参数：
 *  textDom [JavaScript DOM String] 当前对象
 *  value [String] 要插入的文本
 */
var getCaretPosition = function (oField) {
    var iCaretPos = 0
    var doc = oField.ownerDocument || oField.document
    var win = doc.defaultView || doc.parentWindow
    var sel
    if (typeof win.getSelection != 'undefined') {
        sel = win.getSelection()
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0)
            var preCaretRange = range.cloneRange()
            preCaretRange.selectNodeContents(oField)
            preCaretRange.setEnd(range.endContainer, range.endOffset)
            iCaretPos = preCaretRange.toString().length
        }
    } else if ((sel = doc.selection) && sel.type !== 'Control') {
        var textRange = sel.createRange()
        var preCaretTextRange = doc.body.createTextRange()
        preCaretTextRange.moveToElementText(oField)
        preCaretTextRange.setEndPoint('EndToEnd', textRange)
        iCaretPos = preCaretTextRange.text.length
    }
    return (iCaretPos)
}
export {
    getCaretPosition
}