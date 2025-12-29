import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-libraries.header.title',
    defaultMessage: 'Thư viện',
    description: 'Title for page',
  },
  headingSubtitle: {
    id: 'course-authoring.course-libraries.header.subtitle',
    defaultMessage: 'Nội dung',
    description: 'Subtitle for page',
  },
  homeTabTitle: {
    id: 'course-authoring.course-libraries.tab.home.title',
    defaultMessage: 'Thư viện',
    description: 'Tab title for home tab',
  },
  homeTabDescription: {
    id: 'course-authoring.course-libraries.tab.home.description',
    defaultMessage: 'Khóa học của bạn chứa nội dung từ các thư viện này.',
    description: 'Description text for home tab',
  },
  homeTabDescriptionEmpty: {
    id: 'course-authoring.course-libraries.tab.home.description-no-links',
    defaultMessage: 'Khóa học này không sử dụng bất kỳ nội dung nào từ thư viện.',
    description: 'Description text for home tab',
  },
  reviewTabTitle: {
    id: 'course-authoring.course-libraries.tab.review.title',
    defaultMessage: 'Xem lại các cập nhật nội dung',
    description: 'Tab title for review tab',
  },
  reviewTabDescriptionEmpty: {
    id: 'course-authoring.course-libraries.tab.review.description-no-links',
    defaultMessage: 'Tất cả các thành phần đều đã được cập nhật bản mới nhất',
    description: 'Description text for home tab',
  },
  breadcrumbLabel: {
    id: 'course-authoring.course-libraries.downstream-block.breadcrumb.label',
    defaultMessage: 'Vị trí:',
    description: 'Label for breadcrumb in component cards in course libraries page.',
  },
  totalComponentLabel: {
    id: 'course-authoring.course-libraries.libcard.total-component.label',
    defaultMessage: 'Đã áp dụng {totalComponents, plural, one {# thành phần} other {# thành phần}}',
    description: 'Prints total components applied from library',
  },
  allUptodateLabel: {
    id: 'course-authoring.course-libraries.libcard.up-to-date.label',
    defaultMessage: 'Tất cả thành phần đã được cập nhật',
    description: 'Shown if all components under a library are up to date',
  },
  outOfSyncCountLabel: {
    id: 'course-authoring.course-libraries.libcard.out-of-sync.label',
    defaultMessage: '{outOfSyncCount, plural, one {# thành phần} other {# thành phần}} chưa đồng bộ',
    description: 'Prints number of components out of sync from library',
  },
  outOfSyncCountAlertTitle: {
    id: 'course-authoring.course-libraries.libcard.out-of-sync.alert.title',
    defaultMessage: '{outOfSyncCount, plural, one {# thành phần thư viện} other {# thành phần thư viện}} chưa được đồng bộ. Vui lòng xem lại các cập nhật để chấp nhận hoặc bỏ qua các thay đổi.',
    description: 'Alert message shown when library components are out of sync',
  },
  reviewUpdatesBtn: {
    id: 'course-authoring.course-libraries.libcard.review-updates.btn.text',
    defaultMessage: 'Xem lại cập nhật',
    description: 'Action button to review updates',
  },
  outOfSyncCountAlertReviewBtn: {
    id: 'course-authoring.course-libraries.libcard.out-of-sync.alert.review-btn-text',
    defaultMessage: 'Xem lại',
    description: 'Alert review button text',
  },
  librariesV2DisabledError: {
    id: 'course-authoring.course-libraries.alert.error.libraries.v2.disabled',
    defaultMessage: 'Không thể hiển thị trang này: Thư viện phiên bản 2 (v2) đã bị vô hiệu hóa.',
    description: 'Error message shown to users when trying to load a libraries V2 page while libraries v2 are disabled.',
  },
  cardReviewContentBtn: {
    id: 'course-authoring.course-libraries.review-tab.libcard.review-btn-text',
    defaultMessage: 'Xem lại cập nhật',
    description: 'Card review button for component/container in review tab',
  },
  cardUpdateContentBtn: {
    id: 'course-authoring.course-libraries.review-tab.libcard.update-btn-text',
    defaultMessage: 'Cập nhật',
    description: 'Card update button for component/container in review tab',
  },
  cardIgnoreContentBtn: {
    id: 'course-authoring.course-libraries.review-tab.libcard.ignore-btn-text',
    defaultMessage: 'Bỏ qua',
    description: 'Card ignore button for component/container in review tab',
  },
  updateSingleBlockSuccess: {
    id: 'course-authoring.course-libraries.review-tab.libcard.update-success-toast',
    defaultMessage: 'Thành công! "{name}" đã được cập nhật',
    description: 'Success toast message when a component is updated.',
  },
  ignoreSingleBlockSuccess: {
    id: 'course-authoring.course-libraries.review-tab.libcard.ignore-success-toast',
    defaultMessage: '"{name}" sẽ tiếp tục không đồng bộ với nội dung thư viện. Bạn sẽ được thông báo khi thành phần này có cập nhật mới lần sau.',
    description: 'Success toast message when a component update is ignored.',
  },
  searchPlaceholder: {
    id: 'course-authoring.course-libraries.review-tab.search.placeholder',
    defaultMessage: 'Tìm kiếm',
    description: 'Search text box in review tab placeholder text',
  },
  brokenLinkTooltip: {
    id: 'course-authoring.course-libraries.home-tab.broken-link.tooltip',
    defaultMessage: 'Được lấy từ thư viện - nhưng liên kết nguồn bị hỏng hoặc không hợp lệ.',
    description: 'Tooltip text describing broken link in component listing.',
  },
  genericErrorMessage: {
    id: 'course-authoring.course-libraries.home-tab.error.message',
    defaultMessage: 'Đã xảy ra lỗi! Không thể tải kết quả.',
    description: 'Generic error message displayed when fetching link data fails.',
  },
  viewSectionInCourseLabel: {
    id: 'course-authoring.course-libraries.review-tab.libcard.view-section.label',
    defaultMessage: 'Xem phần này trong khóa học',
    description: 'Label of the button to see the section in the course',
  },
  legacyLibReadyToMigrateAlertTitle: {
    id: 'course-authoring.course-libraries.legacyLibReadyToMigrate.alert.title',
    defaultMessage: 'Khóa học này chứa {count, plural, one {# tham chiếu thư viện cũ} other {# tham chiếu thư viện cũ}}',
    description: 'Title of alert shown when course contains legacy library content references',
  },
  legacyLibReadyToMigrateAlertDescription: {
    id: 'course-authoring.course-libraries.legacyLibReadyToMigrate.alert.description',
    defaultMessage: 'Các tham chiếu thư viện cũ sẽ không còn được hỗ trợ và cần được cập nhật để nhận được các thay đổi trong tương lai.',
    description: 'Description of alert shown when course contains legacy library content references',
  },
  legacyLibReadyToMigrateAlertLearnMoreBtn: {
    id: 'course-authoring.course-libraries.legacyLibReadyToMigrate.alert.learnMoreBtn',
    defaultMessage: 'Tìm hiểu thêm',
    description: 'Learn more button text of alert shown when course contains legacy library content references',
  },
  legacyLibReadyToMigrateAlertActionBtn: {
    id: 'course-authoring.course-libraries.legacyLibReadyToMigrate.alert.actionBtn',
    defaultMessage: 'Cập nhật tham chiếu thư viện',
    description: 'Action button text of alert shown when course contains legacy library content references',
  },
  legacyLibReadyToMigrateTaskCompleted: {
    id: 'course-authoring.course-libraries.legacyLibReadyToMigrate.alert.task.completed',
    defaultMessage: 'Đã cập nhật thành công tất cả các tham chiếu thư viện cũ',
    description: 'Toast text when all legacy library references are updated.',
  },
  legacyLibReadyToMigrateTaskFailed: {
    id: 'course-authoring.course-libraries.legacyLibReadyToMigrate.alert.task.failed',
    defaultMessage: 'Cập nhật tham chiếu thư viện cũ thất bại',
    description: 'Toast text when legacy library references fail to update.',
  },
  legacyLibReadyToMigrateTaskInProgress: {
    id: 'course-authoring.course-libraries.legacyLibReadyToMigrate.alert.task.in-progress',
    defaultMessage: 'Đang cập nhật các tham chiếu thư viện...',
    description: 'Toast text when updating legacy library references is in progress.',
  },
});

export default messages;