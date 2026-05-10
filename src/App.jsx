import { useState, useEffect } from "react";
import {
  ShoppingCart, Plus, Minus, X, Printer, RotateCcw,
  Coffee, Leaf, Zap, UtensilsCrossed, Wine, LayoutGrid,
} from "lucide-react";

const fmt = (n) => new Intl.NumberFormat("vi-VN").format(n) + "đ";

const CAT_ICONS = {
  "Cà phê": Coffee,
  "Trà": Leaf,
  "Sinh tố": Zap,
  "Ăn vặt": UtensilsCrossed,
  "Nước ngọt": Wine,
};

const CATEGORIES = ["Tất cả", "Cà phê", "Trà", "Sinh tố", "Ăn vặt", "Nước ngọt"];

const MENU = [
  { id: 1,  name: "Cà phê đen",        cat: "Cà phê",    price: 20000, unit: "ly"    },
  { id: 2,  name: "Cà phê sữa",        cat: "Cà phê",    price: 25000, unit: "ly"    },
  { id: 3,  name: "Bạc xỉu",           cat: "Cà phê",    price: 28000, unit: "ly"    },
  { id: 4,  name: "Cappuccino",         cat: "Cà phê",    price: 45000, unit: "ly"    },
  { id: 5,  name: "Latte",             cat: "Cà phê",    price: 48000, unit: "ly"    },
  { id: 6,  name: "Americano",         cat: "Cà phê",    price: 40000, unit: "ly"    },
  { id: 7,  name: "Cold Brew",         cat: "Cà phê",    price: 50000, unit: "ly"    },
  { id: 8,  name: "Trà đào",           cat: "Trà",       price: 35000, unit: "ly"    },
  { id: 9,  name: "Trà vải",           cat: "Trà",       price: 35000, unit: "ly"    },
  { id: 10, name: "Trà sữa trân châu", cat: "Trà",       price: 40000, unit: "ly"    },
  { id: 11, name: "Trà chanh",         cat: "Trà",       price: 25000, unit: "ly"    },
  { id: 12, name: "Trà hoa cúc",       cat: "Trà",       price: 30000, unit: "ly"    },
  { id: 13, name: "Sinh tố bơ",        cat: "Sinh tố",   price: 45000, unit: "ly"    },
  { id: 14, name: "Sinh tố dâu",       cat: "Sinh tố",   price: 40000, unit: "ly"    },
  { id: 15, name: "Sinh tố xoài",      cat: "Sinh tố",   price: 40000, unit: "ly"    },
  { id: 16, name: "Sinh tố chuối",     cat: "Sinh tố",   price: 35000, unit: "ly"    },
  { id: 17, name: "Bánh mì",           cat: "Ăn vặt",    price: 25000, unit: "ổ"     },
  { id: 18, name: "Bánh croissant",    cat: "Ăn vặt",    price: 35000, unit: "cái"   },
  { id: 19, name: "Bánh flan",         cat: "Ăn vặt",    price: 20000, unit: "cái"   },
  { id: 20, name: "Khoai tây chiên",   cat: "Ăn vặt",    price: 30000, unit: "phần"  },
  { id: 21, name: "Coca Cola",         cat: "Nước ngọt", price: 15000, unit: "lon"   },
  { id: 22, name: "Pepsi",             cat: "Nước ngọt", price: 15000, unit: "lon"   },
  { id: 23, name: "7Up",               cat: "Nước ngọt", price: 15000, unit: "lon"   },
  { id: 24, name: "Nước suối",         cat: "Nước ngọt", price: 10000, unit: "chai"  },
];

const SHOP = {
  name: "Minh Ngọc Quán",
  address: "123 Đường Lê Lợi, TP. Vũng Tàu",
  phone: "0909 123 456",
  wifi: "CafeABC@2024",
};

const ACCENT = "#c9622b";
const DARK   = "#1c1c22";
const DARK2  = "#28282f";
const DARK3  = "#323239";

/* ─── Receipt HTML ─── */
function generateReceiptHTML(order, tableNo, total) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("vi-VN");
  const timeStr = now.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
  const invoiceNo = "HD" + Date.now().toString().slice(-6);
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Hóa đơn ${invoiceNo}</title>
<style>
  @page{size:80mm auto;margin:3mm 4mm}
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Courier New',monospace;font-size:11px;width:72mm;color:#000}
  .c{text-align:center}.b{font-weight:bold}.lg{font-size:15px;font-weight:bold}
  .sm{font-size:10px}.dash{border-top:1px dashed #000;margin:5px 0}
  .solid{border-top:1px solid #000;margin:5px 0}
  .row{display:flex;justify-content:space-between;align-items:flex-start;margin:2px 0}
  .item-name{flex:1;padding-right:4px}.amt{white-space:nowrap;font-weight:bold}
  .note{font-size:10px;padding-left:8px;color:#444;margin-bottom:3px}
  .total-row{display:flex;justify-content:space-between;font-size:14px;font-weight:bold;margin:4px 0}
  .footer{text-align:center;font-size:10px;margin-top:4px}
</style></head><body>
<div class="c lg">${SHOP.name}</div>
<div class="c sm">${SHOP.address}</div>
<div class="c sm">Tel: ${SHOP.phone}</div>
<div class="solid"></div>
<div class="c b" style="font-size:13px">HÓA ĐƠN THANH TOÁN</div>
<div class="dash"></div>
<div class="row"><span>Số HĐ:</span><span class="b">${invoiceNo}</span></div>
<div class="row"><span>Bàn số:</span><span class="b">${tableNo}</span></div>
<div class="row"><span>Ngày:</span><span>${dateStr}  ${timeStr}</span></div>
<div class="dash"></div>
<div class="row b sm"><span class="item-name">TÊN MÓN</span><span style="width:24px;text-align:center">SL</span><span>TIỀN</span></div>
<div class="dash"></div>
${order.map(item => `
<div class="row">
  <span class="item-name">${item.name}</span>
  <span style="width:24px;text-align:center">${item.qty}</span>
  <span class="amt">${new Intl.NumberFormat("vi-VN").format(item.price * item.qty)}đ</span>
</div>
<div class="sm" style="color:#555;padding-left:6px">${new Intl.NumberFormat("vi-VN").format(item.price)}đ x ${item.qty}</div>
${item.note ? `<div class="note">» ${item.note}</div>` : ""}
`).join("")}
<div class="dash"></div>
<div class="row"><span>Số món:</span><span>${order.reduce((s,i)=>s+i.qty,0)} phần</span></div>
<div class="solid"></div>
<div class="total-row"><span>TỔNG CỘNG:</span><span>${new Intl.NumberFormat("vi-VN").format(total)}đ</span></div>
<div class="solid"></div>
<div class="footer">WiFi: ${SHOP.wifi}</div>
<div class="footer" style="margin-top:6px">*** Cảm ơn quý khách! ***</div>
<div class="footer">Hẹn gặp lại lần sau</div>
<br/><br/></body></html>`;
}

/* ─── Inline styles helpers ─── */
const s = {
  // Layout
  appWrap: {
    display: "flex", height: "100dvh", fontFamily: "'Segoe UI', system-ui, sans-serif",
    background: "#f5f3ef", overflow: "hidden", position: "relative",
  },
  // Left / menu panel
  menuPanel: (isMobile, activeTab) => ({
    flex: 1, display: isMobile ? (activeTab === "menu" ? "flex" : "none") : "flex",
    flexDirection: "column", overflow: "hidden", minWidth: 0,
  }),
  // Right / order panel
  orderPanel: (isMobile, activeTab) => ({
    width: isMobile ? "100%" : 300,
    display: isMobile ? (activeTab === "order" ? "flex" : "none") : "flex",
    flexDirection: "column", background: DARK, flexShrink: 0,
    // on mobile it takes full width but is hidden via display:none when not active
  }),
};

/* ══════════════════════════════════════════════════════ */
export default function App() {
  const [selectedCat, setSelectedCat] = useState("Tất cả");
  const [order, setOrder]             = useState([]);
  const [modal, setModal]             = useState(null);
  const [tableNo, setTableNo]         = useState("1");
  const [printed, setPrinted]         = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab]     = useState("menu"); // "menu" | "order"
  const [isMobile, setIsMobile]       = useState(false);

  /* Detect narrow viewport */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered   = selectedCat === "Tất cả" ? MENU : MENU.filter(m => m.cat === selectedCat);
  const total      = order.reduce((s, i) => s + i.price * i.qty, 0);
  const orderCount = order.reduce((s, i) => s + i.qty, 0);

  const openModal = (item) => {
    const existing = order.find(o => o.id === item.id);
    setModal({ item, qty: existing ? existing.qty : 1, note: existing?.note || "" });
  };

  const addToOrder = () => {
    if (!modal) return;
    const { item, qty, note } = modal;
    if (qty === 0) {
      setOrder(prev => prev.filter(o => o.id !== item.id));
    } else {
      setOrder(prev => {
        const exists = prev.find(o => o.id === item.id);
        if (exists) return prev.map(o => o.id === item.id ? { ...o, qty, note } : o);
        return [...prev, { ...item, qty, note }];
      });
    }
    setModal(null);
  };

  const removeItem = (id) => setOrder(prev => prev.filter(o => o.id !== id));

  const handlePrint = () => {
    if (order.length === 0) return;
    const html = generateReceiptHTML(order, tableNo, total);
    const win  = window.open("", "_blank", "width=400,height=600");
    if (win) { win.document.write(html); win.document.close(); win.focus(); setTimeout(() => win.print(), 400); }
    setPrinted(true);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2500);
  };

  const handleReset = () => {
    setOrder([]);
    setPrinted(false);
    setTableNo(prev => String(Number(prev) + 1));
    if (isMobile) setActiveTab("menu");
  };

  /* ── When user adds item on mobile, don't switch tab automatically ── */

  return (
    <div style={s.appWrap}>

      {/* ══ LEFT — MENU PANEL ══ */}
      <div style={s.menuPanel(isMobile, activeTab)}>

        {/* Top bar */}
        <div style={{ background: "#fff", padding: "12px 16px 10px", borderBottom: "1px solid #e8e3db", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div>
            <div style={{ fontSize: isMobile ? 15 : 18, fontWeight: 800, color: DARK, letterSpacing: -0.5 }}>
              POS — {SHOP.name}
            </div>
            <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>Chọn món và thêm vào đơn hàng</div>
          </div>
          {/* Table selector */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#f8f6f2", border: "1px solid #e5e0d8", borderRadius: 10, padding: "5px 12px" }}>
            <span style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>BÀN</span>
            <input
              value={tableNo}
              onChange={e => setTableNo(e.target.value)}
              style={{ width: 32, border: "none", background: "transparent", fontSize: 18, fontWeight: 800, textAlign: "center", outline: "none", color: ACCENT }}
            />
          </div>
        </div>

        {/* Category tabs */}
        <div style={{ background: "#fff", display: "flex", gap: 6, padding: "8px 16px", borderBottom: "1px solid #e8e3db", overflowX: "auto", flexShrink: 0, WebkitOverflowScrolling: "touch" }}>
          {CATEGORIES.map(cat => {
            const Icon   = CAT_ICONS[cat];
            const active = selectedCat === cat;
            return (
              <button key={cat} onClick={() => setSelectedCat(cat)}
                style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 13px", borderRadius: 22, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", transition: "all 0.15s", background: active ? ACCENT : "#f0ece6", color: active ? "#fff" : "#666" }}
              >
                {Icon && <Icon size={13} />}{cat}
              </button>
            );
          })}
        </div>

        {/* Menu grid */}
        <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 10, alignContent: "start", WebkitOverflowScrolling: "touch" }}>
          {filtered.map(item => {
            const inOrder = order.find(o => o.id === item.id);
            return (
              <div key={item.id} onClick={() => openModal(item)}
                style={{ background: "#fff", borderRadius: 14, cursor: "pointer", padding: "13px 12px", border: inOrder ? `2px solid ${ACCENT}` : "1.5px solid #e8e3db", position: "relative", transition: "all 0.15s", userSelect: "none", WebkitTapHighlightColor: "transparent" }}
              >
                {inOrder && (
                  <div style={{ position: "absolute", top: -8, right: -8, background: ACCENT, color: "#fff", borderRadius: 12, width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>
                    {inOrder.qty}
                  </div>
                )}
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3, marginBottom: 8 }}>{item.name}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: ACCENT }}>{fmt(item.price)}</div>
                <div style={{ fontSize: 11, color: "#bbb", marginTop: 2 }}>/{item.unit}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══ RIGHT — ORDER PANEL ══ */}
      <div style={s.orderPanel(isMobile, activeTab)}>

        {/* Order header */}
        <div style={{ padding: "16px 18px 13px", borderBottom: `1px solid ${DARK3}`, flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "#fff" }}>
            <ShoppingCart size={17} color={ACCENT} />
            Đơn hàng
            {orderCount > 0 && (
              <span style={{ background: ACCENT, color: "#fff", borderRadius: 10, padding: "1px 8px", fontSize: 12, fontWeight: 700 }}>{orderCount}</span>
            )}
          </div>
          <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>Bàn {tableNo} · {order.length} loại món</div>
        </div>

        {/* Order items */}
        <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
          {order.length === 0 ? (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#444", gap: 10, padding: 24 }}>
              <ShoppingCart size={36} color="#333" />
              <span style={{ fontSize: 13 }}>Chưa có món</span>
              <span style={{ fontSize: 11, color: "#555", textAlign: "center" }}>Nhấn vào món để thêm</span>
              {isMobile && (
                <button onClick={() => setActiveTab("menu")}
                  style={{ marginTop: 8, padding: "10px 22px", background: ACCENT, color: "#fff", border: "none", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  Xem thực đơn
                </button>
              )}
            </div>
          ) : (
            order.map(item => (
              <div key={item.id} style={{ padding: "11px 18px", borderBottom: `1px solid ${DARK3}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#f0ece6", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                    {item.note && <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>» {item.note}</div>}
                    <div style={{ fontSize: 12, color: "#777", marginTop: 3 }}>{item.qty} × {fmt(item.price)}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <button onClick={() => removeItem(item.id)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#555", padding: 4, lineHeight: 1 }}>
                      <X size={14} />
                    </button>
                    <span style={{ fontSize: 13, fontWeight: 700, color: ACCENT }}>{fmt(item.price * item.qty)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / actions */}
        <div style={{ padding: "14px 18px", borderTop: `1px solid ${DARK3}`, flexShrink: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
            <span style={{ fontSize: 12, color: "#888" }}>TỔNG CỘNG</span>
            <span style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{fmt(total)}</span>
          </div>

          <button onClick={handlePrint} disabled={order.length === 0}
            style={{ width: "100%", padding: "13px 0", borderRadius: 12, border: "none", cursor: order.length === 0 ? "not-allowed" : "pointer", background: order.length === 0 ? "#333" : ACCENT, color: order.length === 0 ? "#666" : "#fff", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8, transition: "all 0.15s" }}>
            <Printer size={16} />
            {printed ? "In lại hóa đơn" : "In hóa đơn (80mm)"}
          </button>

          <button onClick={handleReset}
            style={{ width: "100%", padding: "9px 0", borderRadius: 10, border: `1px solid ${DARK3}`, cursor: "pointer", background: "transparent", color: "#777", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, transition: "all 0.15s" }}>
            <RotateCcw size={13} />
            Đón khách mới (Bàn {Number(tableNo) + 1})
          </button>
        </div>
      </div>

      {/* ══ BOTTOM TAB BAR — mobile only ══ */}
      {isMobile && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 64, background: "#fff", borderTop: "1px solid #e8e3db", display: "flex", zIndex: 100, boxShadow: "0 -2px 12px rgba(0,0,0,0.08)" }}>
          {/* Menu tab */}
          <button onClick={() => setActiveTab("menu")}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, border: "none", background: "transparent", cursor: "pointer", color: activeTab === "menu" ? ACCENT : "#aaa", WebkitTapHighlightColor: "transparent" }}>
            <LayoutGrid size={22} strokeWidth={activeTab === "menu" ? 2.5 : 1.8} />
            <span style={{ fontSize: 11, fontWeight: activeTab === "menu" ? 700 : 500 }}>Thực đơn</span>
          </button>

          {/* Order tab — with badge */}
          <button onClick={() => setActiveTab("order")}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, border: "none", background: "transparent", cursor: "pointer", color: activeTab === "order" ? ACCENT : "#aaa", position: "relative", WebkitTapHighlightColor: "transparent" }}>
            {orderCount > 0 && (
              <div style={{ position: "absolute", top: 8, right: "calc(50% - 22px)", background: ACCENT, color: "#fff", borderRadius: 10, minWidth: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, padding: "0 4px" }}>
                {orderCount}
              </div>
            )}
            <ShoppingCart size={22} strokeWidth={activeTab === "order" ? 2.5 : 1.8} />
            <span style={{ fontSize: 11, fontWeight: activeTab === "order" ? 700 : 500 }}>Đơn hàng</span>
          </button>
        </div>
      )}

      {/* ══ MODAL ══ */}
      {modal && (
        <div onClick={() => setModal(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "0 16px" }}>
          <div onClick={e => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: 20, padding: "26px 22px 22px", width: "100%", maxWidth: 360, position: "relative" }}>
            <button onClick={() => setModal(null)}
              style={{ position: "absolute", top: 14, right: 14, background: "#f5f3ef", border: "none", borderRadius: 8, cursor: "pointer", padding: 6, lineHeight: 1 }}>
              <X size={16} color="#888" />
            </button>

            <div style={{ fontSize: 19, fontWeight: 800, color: DARK, marginBottom: 2 }}>{modal.item.name}</div>
            <div style={{ fontSize: 12, color: "#aaa", marginBottom: 12 }}>{modal.item.cat} · 1 {modal.item.unit}</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: ACCENT, marginBottom: 20 }}>
              {fmt(modal.item.price)}
              <span style={{ fontSize: 13, fontWeight: 500, color: "#ccc" }}>/{modal.item.unit}</span>
            </div>

            {/* Quantity */}
            <div style={{ fontSize: 11, fontWeight: 700, color: "#aaa", letterSpacing: 0.8, marginBottom: 10 }}>SỐ LƯỢNG</div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <button onClick={() => setModal(m => ({ ...m, qty: Math.max(0, m.qty - 1) }))}
                style={{ width: 44, height: 44, borderRadius: 22, border: "2px solid #e8e3db", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Minus size={18} color="#555" />
              </button>
              <span style={{ fontSize: 28, fontWeight: 900, minWidth: 36, textAlign: "center", color: DARK }}>{modal.qty}</span>
              <button onClick={() => setModal(m => ({ ...m, qty: m.qty + 1 }))}
                style={{ width: 44, height: 44, borderRadius: 22, border: "none", background: ACCENT, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Plus size={18} color="#fff" />
              </button>
              <span style={{ fontSize: 13, color: "#999", fontWeight: 600 }}>= {fmt(modal.item.price * modal.qty)}</span>
            </div>

            {/* Note */}
            <div style={{ fontSize: 11, fontWeight: 700, color: "#aaa", letterSpacing: 0.8, marginBottom: 8 }}>GHI CHÚ</div>
            <textarea
              value={modal.note}
              onChange={e => setModal(m => ({ ...m, note: e.target.value }))}
              placeholder="Ít đường, nhiều đá, không đường..."
              rows={2}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #e8e3db", fontSize: 13, outline: "none", resize: "none", fontFamily: "inherit", color: DARK, marginBottom: 18, boxSizing: "border-box" }}
            />

            <button onClick={addToOrder}
              style={{ width: "100%", padding: 15, borderRadius: 12, border: "none", background: ACCENT, color: "#fff", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>
              {modal.qty === 0 ? "Xóa khỏi đơn" : `Thêm vào đơn · ${fmt(modal.item.price * modal.qty)}`}
            </button>
          </div>
        </div>
      )}

      {/* ══ SUCCESS TOAST ══ */}
      {showSuccess && (
        <div style={{ position: "fixed", bottom: isMobile ? 76 : 28, left: "50%", transform: "translateX(-50%)", background: "#1a2e1a", color: "#7dda7d", padding: "12px 22px", borderRadius: 12, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, zIndex: 300, whiteSpace: "nowrap" }}>
          <span style={{ fontSize: 18 }}>✓</span> Đã gửi lệnh in hóa đơn!
        </div>
      )}
    </div>
  );
}