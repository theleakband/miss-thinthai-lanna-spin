/**
 * Main Application Logic supporting Dual Interfaces:
 * 1. Stage LED View (Production View - Pure Clean Luxury)
 * 2. Backstage Admin Panel (Presentation Setup & Pool Management)
 */

const PRESETS = {
  pageant_final: [
    { id: 'f1', title: 'พลังแห่งสตรีกับการขับเคลื่อนประเทศ', desc: 'ในฐานะตัวแทนผู้หญิงยุคใหม่ คุณคิดว่าบทบาทใดของสตรีที่มีพลังสูงสุดในการขับเคลื่อนเศรษฐกิจและสังคมไทยในเวทีโลก?', category: 'รอบ 3 คนสุดท้าย (Final Question)', used: false },
    { id: 'f2', title: 'ความงามที่แท้จริงในยุคดิจิทัล', desc: 'ในยุคที่โซเชียลมีเดียมีอิทธิพลต่อค่านิยมความงาม คุณจะนิยาม "คุณค่าและความงามที่แท้จริง" ของนางสาวถิ่นไทยงามอย่างไร?', category: 'รอบ 3 คนสุดท้าย (Final Question)', used: false },
    { id: 'f3', title: 'การศึกษาและความเท่าเทียม', desc: 'หากคุณได้รับตำแหน่งและมีโอกาสริเริ่มโครงการ 1 อย่างเพื่อลดความเหลื่อมล้ำทางการศึกษาในพื้นที่ห่างไกล คุณจะทำสิ่งใดเป็นอันดับแรก?', category: 'รอบ 3 คนสุดท้าย (Final Question)', used: false },
    { id: 'f4', title: 'ภาวะผู้นำกับวิกฤตสิ่งแวดล้อม', desc: 'โลกกำลังเผชิญกับภาวะโลกร้อน คุณคิดว่าเยาวชนคนรุ่นใหม่ควรมีบทบาทอย่างไรในการสร้างความเปลี่ยนแปลงด้านสิ่งแวดล้อมอย่างยั่งยืน?', category: 'รอบ 3 คนสุดท้าย (Final Question)', used: false },
    { id: 'f5', title: 'มรดกทางวัฒนธรรมสู่สากล', desc: 'คุณจะใช้อัตลักษณ์ความเป็นไทยและ Soft Power ผสมผสานกับนวัตกรรมสมัยใหม่อย่างไรเพื่อยกระดับสู่สากลอย่างทรงเกียรติ?', category: 'รอบ 3 คนสุดท้าย (Final Question)', used: false }
  ],
  pageant_keyword: [
    { id: 'k1', title: 'เสน่ห์ล้านนา (LANNA CHARM & GRACE)', desc: 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', category: 'Keyword Speech', used: false },
    { id: 'k2', title: 'SOFT POWER (ซอฟต์พาวเวอร์ไทย)', desc: 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', category: 'Keyword Speech', used: false },
    { id: 'k3', title: 'EMPOWERMENT (การเสริมสร้างพลังบวก)', desc: 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', category: 'Keyword Speech', used: false },
    { id: 'k4', title: 'SUSTAINABILITY (ความยั่งยืน)', desc: 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', category: 'Keyword Speech', used: false },
    { id: 'k5', title: 'INCLUSIVITY (ความเท่าเทียมและหลากหลาย)', desc: 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', category: 'Keyword Speech', used: false },
    { id: 'k6', title: 'RESILIENCE (ความเข้มแข็งล้มแล้วลุกไว)', desc: 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', category: 'Keyword Speech', used: false },
    { id: 'k7', title: 'CULTURAL HERITAGE (มรดกทางวัฒนธรรม)', desc: 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', category: 'Keyword Speech', used: false },
    { id: 'k8', title: 'AUTHENTICITY (ความเป็นตัวของตัวเอง)', desc: 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', category: 'Keyword Speech', used: false }
  ],
  thai_culture: [
    { id: 'tc1', title: 'ผ้าทอล้านนากับเวทีแฟชั่นระดับโลก', desc: 'คุณจะประยุกต์และส่งเสริมผ้าทออัตลักษณ์ล้านนาให้กลายเป็นแฟชั่นระดับโลกที่คนรุ่นใหม่สวมใส่ในชีวิตประจำวันได้อย่างไร?', category: 'อัตลักษณ์ไทย & เสน่ห์ล้านนา ๒๕๖๙', used: false },
    { id: 'tc2', title: 'เสน่ห์การท่องเที่ยววัฒนธรรมล้านนา', desc: 'หากคุณเป็นทูตการท่องเที่ยวถิ่นไทยงาม คุณจะนำเสนอเสน่ห์และภูมิปัญญาของล้านนาอย่างไรให้ดึงดูดนักเดินทางทั่วโลก?', category: 'อัตลักษณ์ไทย & เสน่ห์ล้านนา ๒๕๖๙', used: false },
    { id: 'tc3', title: 'อาหารพื้นถิ่นและภูมิปัญญาไทย', desc: 'อาหารไทยและอาหารเหนือได้รับการยอมรับระดับโลก คุณจะสานต่อภูมิปัญญาพื้นบ้านของแต่ละท้องถิ่นอย่างไรไม่ให้สูญหาย?', category: 'อัตลักษณ์ไทย & เสน่ห์ล้านนา ๒๕๖๙', used: false },
    { id: 'tc4', title: 'รอยยิ้มและการต้อนรับแบบไทยล้านนา', desc: 'ในโลกที่ความสัมพันธ์เริ่มเหินห่าง "มิตรไมตรีและน้ำใจไมตรี" มีความสำคัญอย่างไรต่อการสร้างสันติภาพและความเข้าใจอันดี?', category: 'อัตลักษณ์ไทย & เสน่ห์ล้านนา ๒๕๖๙', used: false }
  ],
  social_empowerment: [
    { id: 'se1', title: 'สุขภาพจิตของคนรุ่นใหม่', desc: 'ในสังคมที่มีการแข่งขันสูง คุณคิดว่าสังคมควรมีระบบสนับสนุนอย่างไรเพื่อดูแลสุขภาพจิตและสร้างความสุขที่ยั่งยืน?', category: 'ทัศนคติ & สังคม', used: false },
    { id: 'se2', title: 'การกลั่นแกล้งบนโลกออนไลน์ (Cyberbullying)', desc: 'ในฐานะบุคคลสาธารณะ คุณมีวิธีรับมือกับความคิดเห็นเชิงลบอย่างไร และจะสร้างพื้นที่ออนไลน์ที่ปลอดภัยได้อย่างไร?', category: 'ทัศนคติ & สังคม', used: false },
    { id: 'se3', title: 'โอกาสของผู้สูงวัยในสังคมสูงวัย', desc: 'ประเทศไทยก้าวเข้าสู่สังคมสูงวัย คุณคิดว่าจะดึงศักยภาพและประสบการณ์ของผู้สูงอายุมาช่วยพัฒนาสังคมได้อย่างไร?', category: 'ทัศนคติ & สังคม', used: false },
    { id: 'se4', title: 'ความหวังและแรงบันดาลใจ', desc: 'อะไรคือสิ่งที่ทำให้คุณไม่ยอมแพ้ต่ออุปสรรค และคุณจะส่งต่อความหวังนี้ให้กับผู้คนรอบข้างอย่างไร?', category: 'ทัศนคติ & สังคม', used: false }
  ]
};

class PageantStageController {
  constructor() {
    this.items = [];
    this.history = [];
    this.isNoRepeat = true;
    this.isSpinning = false;
    this.spinDurationSec = 4.0;
    this.currentView = 'stage'; // 'stage' or 'admin'

    // DOM Elements - Stage View
    this.stageScreen = document.getElementById('stage-screen');
    this.stageControls = document.getElementById('stage-controls');
    this.cardOuter = document.getElementById('card-outer');
    this.stageCard = document.getElementById('stage-card');
    this.mainDisplayText = document.getElementById('main-display-text');
    this.subDisplayText = document.getElementById('sub-display-text');
    this.layerBlurBack = document.getElementById('layer-blur-back');
    this.layerBlurMid = document.getElementById('layer-blur-mid');
    this.tensionProgress = document.getElementById('tension-progress');
    this.winnerBurst = document.getElementById('winner-burst');
    
    this.btnQuickSpin = document.getElementById('btn-quick-spin');
    this.btnSpinText = document.getElementById('btn-spin-text');
    this.btnSwitchToAdmin = document.getElementById('btn-switch-to-admin');
    this.btnStageFullscreen = document.getElementById('btn-stage-fullscreen');
    this.btnStageSound = document.getElementById('btn-stage-sound');
    this.stageSoundIcon = document.getElementById('stage-sound-icon');

    // DOM Elements - Admin View
    this.adminPanel = document.getElementById('admin-panel');
    this.btnSwitchToStage = document.getElementById('btn-switch-to-stage');
    this.btnAdminSpin = document.getElementById('btn-admin-spin');
    this.btnAdminResetPool = document.getElementById('btn-admin-reset-pool');
    this.adminNoRepeatToggle = document.getElementById('admin-no-repeat-toggle');
    this.adminModeLabel = document.getElementById('admin-mode-label');
    this.spinDurationSlider = document.getElementById('spin-duration-slider');
    this.durationValDisplay = document.getElementById('duration-val-display');

    this.statRemaining = document.getElementById('stat-remaining');
    this.statUsed = document.getElementById('stat-used');
    this.statTotal = document.getElementById('stat-total');
    this.tableTotalCount = document.getElementById('table-total-count');

    this.adminHistoryList = document.getElementById('admin-history-list');
    this.btnAdminClearHistory = document.getElementById('btn-admin-clear-history');

    this.adminNewTitle = document.getElementById('admin-new-title');
    this.adminNewCategory = document.getElementById('admin-new-category');
    this.adminNewDesc = document.getElementById('admin-new-desc');
    this.btnAdminAddItem = document.getElementById('btn-admin-add-item');

    this.adminTableBody = document.getElementById('admin-table-body');
    this.btnAdminExport = document.getElementById('btn-admin-export');
    this.adminImportFile = document.getElementById('admin-import-file');
    this.btnAdminClearAll = document.getElementById('btn-admin-clear-all');

    this.init();
  }

  init() {
    this.loadState();
    this.bindEvents();
    this.updateStats();
    this.renderAdminTable();
    this.renderAdminHistory();
    lucide.createIcons();
  }

  loadState() {
    const savedItems = localStorage.getItem('thin_thai_items_v2');
    if (savedItems) {
      try {
        this.items = JSON.parse(savedItems);
      } catch (e) {
        this.items = [...PRESETS.pageant_keyword, ...PRESETS.pageant_final];
      }
    } else {
      this.items = [...PRESETS.pageant_keyword, ...PRESETS.pageant_final];
      this.saveItems();
    }

    const savedNoRepeat = localStorage.getItem('thin_thai_no_repeat');
    if (savedNoRepeat !== null) {
      this.isNoRepeat = savedNoRepeat === 'true';
      this.adminNoRepeatToggle.checked = this.isNoRepeat;
    }
    this.updateModeDisplay();

    const savedDuration = localStorage.getItem('thin_thai_duration');
    if (savedDuration) {
      this.spinDurationSec = parseFloat(savedDuration);
      this.spinDurationSlider.value = this.spinDurationSec;
      this.durationValDisplay.innerText = `${this.spinDurationSec.toFixed(1)}s`;
    }
  }

  saveItems() {
    localStorage.setItem('thin_thai_items_v2', JSON.stringify(this.items));
  }

  saveSettings() {
    localStorage.setItem('thin_thai_no_repeat', this.isNoRepeat.toString());
    localStorage.setItem('thin_thai_duration', this.spinDurationSec.toString());
  }

  switchView(viewName) {
    this.currentView = viewName;
    if (viewName === 'stage') {
      document.body.classList.remove('admin-view-active');
      document.body.classList.add('stage-view-active');
    } else {
      document.body.classList.remove('stage-view-active');
      document.body.classList.add('admin-view-active');
      this.renderAdminTable();
      this.renderAdminHistory();
      this.updateStats();
    }
    lucide.createIcons();
  }

  bindEvents() {
    // Switch View Buttons
    this.btnSwitchToAdmin.addEventListener('click', () => this.switchView('admin'));
    this.btnSwitchToStage.addEventListener('click', () => this.switchView('stage'));

    // Spin Buttons
    this.btnQuickSpin.addEventListener('click', () => {
      if (!this.isSpinning) this.startSpin();
    });

    this.btnAdminSpin.addEventListener('click', () => {
      if (!this.isSpinning) {
        this.switchView('stage');
        setTimeout(() => this.startSpin(), 150);
      }
    });

    // Keyboard Hotkeys: Spacebar to Spin, 'A' to switch to admin, 'F' for fullscreen
    window.addEventListener('keydown', (e) => {
      const isInput = document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA';
      if (!isInput) {
        if (e.code === 'Space' && !this.isSpinning) {
          e.preventDefault();
          this.startSpin();
        } else if (e.key === 'a' || e.key === 'A') {
          if (this.currentView === 'stage') this.switchView('admin');
          else this.switchView('stage');
        } else if (e.key === 'f' || e.key === 'F') {
          this.toggleFullscreen();
        }
      }
    });

    // Listen to Fullscreen Change events to toggle class
    const updateFullscreenClass = () => {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        document.body.classList.add('is-fullscreen');
      } else {
        document.body.classList.remove('is-fullscreen');
      }
    };
    document.addEventListener('fullscreenchange', updateFullscreenClass);
    document.addEventListener('webkitfullscreenchange', updateFullscreenClass);

    // Admin Toggle Mode
    this.adminNoRepeatToggle.addEventListener('change', (e) => {
      this.isNoRepeat = e.target.checked;
      this.updateModeDisplay();
      this.saveSettings();
      this.updateStats();
    });

    // Duration Slider
    this.spinDurationSlider.addEventListener('input', (e) => {
      this.spinDurationSec = parseFloat(e.target.value);
      this.durationValDisplay.innerText = `${this.spinDurationSec.toFixed(1)}s`;
      this.saveSettings();
    });

    // Reset Pool
    const resetHandler = () => {
      if (confirm('คุณต้องการรีเซ็ตคำถามที่ใช้ไปแล้วทั้งหมดให้กลับมาสุ่มใหม่หรือไม่?')) {
        this.items.forEach(i => i.used = false);
        this.saveItems();
        this.updateStats();
        this.renderAdminTable();
        alert('รีเซ็ตคำถามทั้งหมดพร้อมสุ่มแล้ว');
      }
    };
    this.btnAdminResetPool.addEventListener('click', resetHandler);

    // Presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pKey = e.currentTarget.dataset.preset;
        if (PRESETS[pKey]) {
          if (confirm(`ต้องการเพิ่มชุดคำถาม "${e.currentTarget.innerText.trim()}" เข้าสู่ระบบหรือไม่?`)) {
            const added = PRESETS[pKey].map((it, idx) => ({
              ...it,
              id: 'p_' + pKey + '_' + Date.now() + '_' + idx,
              used: false
            }));
            this.items = [...this.items, ...added];
            this.saveItems();
            this.renderAdminTable();
            this.updateStats();
          }
        }
      });
    });

    // Add Custom Item
    this.btnAdminAddItem.addEventListener('click', () => {
      const title = this.adminNewTitle.value.trim();
      const cat = this.adminNewCategory.value.trim() || 'คำถามเวที';
      const desc = this.adminNewDesc.value.trim();

      if (!title) {
        alert('กรุณากรอกหัวข้อ / Keyword');
        return;
      }

      this.items.push({
        id: 'c_' + Date.now(),
        title: title,
        category: cat,
        desc: desc,
        used: false
      });

      this.saveItems();
      this.adminNewTitle.value = '';
      this.adminNewDesc.value = '';
      this.renderAdminTable();
      this.updateStats();
    });

    // Clear All
    this.btnAdminClearAll.addEventListener('click', () => {
      if (confirm('คำเตือน: คุณต้องการลบคำถามทั้งหมดออกจากระบบหรือไม่?')) {
        this.items = [];
        this.saveItems();
        this.renderAdminTable();
        this.updateStats();
      }
    });

    // Export JSON
    this.btnAdminExport.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.items, null, 2));
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = "นางสาวถิ่นไทยงาม_คำถาม.json";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });

    // Import JSON
    this.adminImportFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported)) {
            this.items = imported;
            this.saveItems();
            this.renderAdminTable();
            this.updateStats();
            alert('นำเข้าไฟล์สำเร็จ!');
          }
        } catch (err) {
          alert('ไฟล์ไม่ถูกต้อง');
        }
      };
      reader.readAsText(file);
    });

    // Fullscreen
    this.btnStageFullscreen.addEventListener('click', () => this.toggleFullscreen());

    // Sound
    this.btnStageSound.addEventListener('click', () => {
      const enabled = window.soundEngine.toggle();
      if (enabled) {
        this.btnStageSound.classList.add('active');
        this.stageSoundIcon.setAttribute('data-lucide', 'volume-2');
      } else {
        this.btnStageSound.classList.remove('active');
        this.stageSoundIcon.setAttribute('data-lucide', 'volume-x');
      }
      lucide.createIcons();
    });

    // Clear History
    this.btnAdminClearHistory.addEventListener('click', () => {
      this.history = [];
      this.renderAdminHistory();
    });
  }

  toggleFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  updateModeDisplay() {
    if (this.isNoRepeat) {
      this.adminModeLabel.innerText = 'ห้ามใช้ซ้ำ (Unique)';
      this.adminModeLabel.style.color = 'var(--gold-light)';
    } else {
      this.adminModeLabel.innerText = 'ใช้ซ้ำได้ (Allow Repeat)';
      this.adminModeLabel.style.color = '#b0b8c7';
    }
  }

  updateStats() {
    const total = this.items.length;
    const used = this.items.filter(i => i.used).length;
    const remaining = this.isNoRepeat ? (total - used) : total;

    this.statRemaining.innerText = remaining;
    this.statUsed.innerText = used;
    this.statTotal.innerText = total;
    this.tableTotalCount.innerText = total;
  }

  getAvailablePool() {
    if (this.isNoRepeat) {
      return this.items.filter(i => !i.used);
    }
    return this.items;
  }

  renderAdminTable() {
    if (this.items.length === 0) {
      this.adminTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem; color: #888;">ไม่มีข้อมูลในคลังคำถาม กรุณากดเลือกชุด Preset ด้านบน หรือพิมพ์เพิ่มใหม่</td></tr>`;
      return;
    }

    this.adminTableBody.innerHTML = this.items.map((item, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td><span style="color: var(--gold-champagne); font-weight: 500;">${item.category || '-'}</span></td>
        <td><strong>${item.title}</strong></td>
        <td><small style="color: var(--text-muted);">${item.desc || '-'}</small></td>
        <td>
          <span class="badge-status ${item.used ? 'used' : 'available'}">
            ${item.used ? 'ใช้แล้ว' : 'พร้อมสุ่ม'}
          </span>
        </td>
        <td>
          <button class="btn-del-icon" onclick="window.stageController.deleteItem('${item.id}')" title="ลบ">
            <i data-lucide="trash-2"></i>
          </button>
        </td>
      </tr>
    `).join('');

    lucide.createIcons();
  }

  deleteItem(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.saveItems();
    this.renderAdminTable();
    this.updateStats();
  }

  renderAdminHistory() {
    if (this.history.length === 0) {
      this.adminHistoryList.innerHTML = `<div class="empty-text">ยังไม่มีประวัติการสุ่ม</div>`;
      return;
    }

    this.adminHistoryList.innerHTML = this.history.map((h, idx) => `
      <div class="admin-history-item">
        <span style="color: var(--gold-light); font-weight: 700;">#${this.history.length - idx}</span>
        <span>${h.title}</span>
        <small style="color: var(--text-muted); margin-left: auto;">${h.category || ''}</small>
      </div>
    `).join('');
  }

  /**
   * Grand Stage Spin Animation with Multi-layer Overlay Deceleration
   */
  startSpin() {
    const pool = this.getAvailablePool();

    if (pool.length === 0) {
      if (this.items.length === 0) {
        alert('ยังไม่มีคำถามในระบบ กรุณาเข้าหน้า Admin Panel เพื่อโหลด Preset คำถาม');
        this.switchView('admin');
      } else {
        alert('คำถามทั้งหมดถูกสุ่มไปหมดแล้วในโหมดห้ามใช้ซ้ำ! กรุณาเข้าหน้า Admin Panel เพื่อกด "รีเซ็ตคำถามที่ใช้ไปแล้ว" หรือเปลี่ยนเป็นโหมดใช้ซ้ำได้');
      }
      return;
    }

    this.isSpinning = true;
    this.btnQuickSpin.disabled = true;
    this.btnSpinText.innerText = 'กำลังสุ่ม...';

    // UI Stage Reset
    this.cardOuter.classList.add('is-spinning');
    this.cardOuter.classList.remove('is-winner');
    this.mainDisplayText.classList.remove('winner-text');
    this.mainDisplayText.classList.add('spinning');
    this.subDisplayText.classList.remove('winner-sub');
    this.subDisplayText.innerText = 'ระบบกำลังทำการสุ่มหัวข้อคำถาม...';
    this.tensionProgress.style.width = '0%';

    // Play Sound Riser
    const durationMs = this.spinDurationSec * 1000;
    window.soundEngine.playRiser(this.spinDurationSec);

    // Pick target winner
    const winnerIndex = Math.floor(Math.random() * pool.length);
    const winner = pool[winnerIndex];

    const allTitles = this.items.map(i => i.title);
    const startTime = performance.now();
    let lastTickTime = 0;

    const animateShuffle = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Update Tension Progress Bar
      this.tensionProgress.style.width = `${progress * 100}%`;

      // Non-linear Smooth Deceleration Curve
      const interval = 30 + Math.pow(progress, 3.2) * 550;

      if (currentTime - lastTickTime > interval) {
        lastTickTime = currentTime;

        // Shuffle multi layers
        const rand1 = allTitles[Math.floor(Math.random() * allTitles.length)];
        const rand2 = allTitles[Math.floor(Math.random() * allTitles.length)];
        const rand3 = allTitles[Math.floor(Math.random() * allTitles.length)];

        this.mainDisplayText.innerText = rand1;
        this.layerBlurMid.innerText = rand2;
        this.layerBlurBack.innerText = rand3;
        this.layerBlurMid.style.opacity = (1 - progress * 0.75).toString();
        this.layerBlurBack.style.opacity = (0.8 - progress * 0.85).toString();

        const tickFreq = 950 - progress * 350;
        window.soundEngine.playTick(tickFreq);
      }

      if (progress < 1) {
        requestAnimationFrame(animateShuffle);
      } else {
        this.finishSpin(winner);
      }
    };

    requestAnimationFrame(animateShuffle);
  }

  finishSpin(winner) {
    this.isSpinning = false;
    this.btnQuickSpin.disabled = false;
    this.btnSpinText.innerText = 'สุ่มคำถามต่อไป (SPIN NEXT)';

    if (this.isNoRepeat) {
      const target = this.items.find(i => i.id === winner.id);
      if (target) {
        target.used = true;
        this.saveItems();
      }
    }

    this.history.unshift(winner);
    if (this.history.length > 30) this.history.pop();
    this.renderAdminHistory();
    this.updateStats();

    // Clear Overlay Blur
    this.layerBlurMid.style.opacity = '0';
    this.layerBlurBack.style.opacity = '0';

    // Reveal Winner on Grand Card
    this.cardOuter.classList.remove('is-spinning');
    this.cardOuter.classList.add('is-winner');
    this.mainDisplayText.classList.remove('spinning');
    this.mainDisplayText.classList.add('winner-text');
    this.mainDisplayText.innerText = winner.title;

    if (winner.desc) {
      this.subDisplayText.innerText = winner.desc;
      this.subDisplayText.classList.add('winner-sub');
    } else {
      this.subDisplayText.innerText = '';
    }

    // Flash burst & Fireworks
    this.winnerBurst.classList.add('flash');
    setTimeout(() => {
      this.winnerBurst.classList.remove('flash');
    }, 1200);

    if (window.triggerFireworks) {
      window.triggerFireworks();
    }

    // Fanfare Sound
    window.soundEngine.playWinnerFanfare();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.stageController = new PageantStageController();
});
