import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  editFieldAriaLabel: {
    id: 'course-authoring.course-outline.card.edit-field.aria-label',
    defaultMessage: 'Chỉnh sửa trường',
  },
  expandTooltip: {
    id: 'course-authoring.course-outline.card.expandTooltip',
    defaultMessage: 'Thu gọn/Mở rộng thẻ này',
  },
  statusBadgeLive: {
    id: 'course-authoring.course-outline.card.status-badge.live',
    defaultMessage: 'Đang hiển thị',
  },
  statusBadgeGated: {
    id: 'course-authoring.course-outline.card.status-badge.gated',
    defaultMessage: 'Bị khóa',
  },
  statusBadgePublishedNotLive: {
    id: 'course-authoring.course-outline.card.status-badge.published-not-live',
    defaultMessage: 'Đã xuất bản (Chưa hiển thị)',
  },
  statusBadgeStaffOnly: {
    id: 'course-authoring.course-outline.card.status-badge.staff-only',
    defaultMessage: 'Chỉ nhân viên',
  },
  statusBadgeDraft: {
    id: 'course-authoring.course-outline.card.status-badge.draft',
    defaultMessage: 'Bản nháp',
  },
  statusBadgeUnpublishedChanges: {
    id: 'course-authoring.course-outline.card.status-badge.draft-unpublished-changes',
    defaultMessage: 'Bản nháp (Các thay đổi chưa xuất bản)',
  },
  altButtonRename: {
    id: 'course-authoring.course-outline.card.button.edit.alt',
    defaultMessage: 'Đổi tên',
  },
  menuPublish: {
    id: 'course-authoring.course-outline.card.menu.publish',
    defaultMessage: 'Xuất bản',
  },
  menuConfigure: {
    id: 'course-authoring.course-outline.card.menu.configure',
    defaultMessage: 'Cấu hình',
  },
  menuDuplicate: {
    id: 'course-authoring.course-outline.card.menu.duplicate',
    defaultMessage: 'Nhân bản',
  },
  menuMoveUp: {
    id: 'course-authoring.course-outline.card.menu.moveup',
    defaultMessage: 'Di chuyển lên',
  },
  menuMoveDown: {
    id: 'course-authoring.course-outline.card.menu.movedown',
    defaultMessage: 'Di chuyển xuống',
  },
  menuDelete: {
    id: 'course-authoring.course-outline.card.menu.delete',
    defaultMessage: 'Xóa',
  },
  menuUnlink: {
    id: 'course-authoring.course-outline.card.menu.unlink',
    defaultMessage: 'Bỏ liên kết khỏi Thư viện',
    description: 'Unlink an item from the library',
  },
  menuUnlinkDisabledTooltip: {
    id: 'course-authoring.course-outline.card.menu.unlink.disabled-tooltip',
    defaultMessage: 'Chỉ có thể bỏ liên kết tham chiếu thư viện cấp cao nhất.',
    description: 'Tooltip for disabled unlink option',
  },
  menuCopy: {
    id: 'course-authoring.course-outline.card.menu.copy',
    defaultMessage: 'Sao chép vào clipboard',
  },
  menuProctoringLinkText: {
    id: 'course-authoring.course-outline.card.menu.proctoring-settings',
    defaultMessage: 'Cài đặt giám thị',
  },
  proctoringLinkTooltip: {
    id: 'course-authoring.course-outline.card.menu.proctoring-settings-tooltip',
    defaultMessage: 'Cài đặt giám thị',
  },
  discussionEnabledBadgeText: {
    id: 'course-authoring.course-outline.card.badge.discussionEnabled',
    defaultMessage: 'Đã bật thảo luận',
  },
  menuManageTags: {
    id: 'course-authoring.course-outline.card.menu.manageTags',
    defaultMessage: 'Quản lý thẻ',
  },
  readyToSyncButtonAlt: {
    id: 'course-authoring.course-outline.card.button.sync.alt',
    defaultMessage: 'Cập nhật có sẵn - nhấn để đồng bộ hóa',
    description: 'Alt text for the sync icon button.',
  },
});

export default messages;
