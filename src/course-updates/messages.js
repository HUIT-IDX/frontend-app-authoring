import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-updates.header.title',
    defaultMessage: 'Cập nhật khóa học',
    description: 'Title for page',
  },
  headingSubtitle: {
    id: 'course-authoring.course-updates.header.subtitle',
    defaultMessage: 'Nội dung',
    description: 'Subtitle for page',
  },
  sectionInfo: {
    id: 'course-authoring.course-updates.section-info',
    defaultMessage: 'Sử dụng tính năng cập nhật khóa học để thông báo cho học viên về các ngày quan trọng hoặc kỳ thi, làm nổi bật các cuộc thảo luận cụ thể trên diễn đàn, thông báo thay đổi lịch trình và giải đáp thắc mắc của học viên.',
    description: 'Message describing the use of course updates in a course',
  },
  newUpdateButton: {
    id: 'course-authoring.course-updates.actions.new-update',
    defaultMessage: 'Cập nhật mới',
    description: 'Button label for header button to add a new course update',
  },
  firstUpdateButton: {
    id: 'course-authoring.course-updates.actions.first-update',
    defaultMessage: 'Thêm bản cập nhật đầu tiên',
    description: 'Button label for button to add first course update',
  },
  noCourseUpdates: {
    id: 'course-authoring.course-updates.actions.first-update-message',
    defaultMessage: 'Bạn chưa thêm bất kỳ bản cập nhật nào cho khóa học này.',
    description: 'Message to notify user that they do not have any existing course updates',
  },
  loadingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.loading-updates.title',
    defaultMessage: 'Tải các bản cập nhật khóa học thất bại',
    description: 'Alert title for loading updates error alert',
  },
  loadingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.loading-updates.description',
    defaultMessage: 'Không thể tải các bản cập nhật cho khóa học {courseId}. Vui lòng thử lại sau.',
    description: 'Alert body message for loading course update errors',
  },
  loadingHandoutsErrorTitle: {
    id: 'course-authoring.course-updates.error.loading-handouts.title',
    defaultMessage: 'Tải tài liệu phát tay (handouts) thất bại',
    description: 'Alert title for loading handouts error alert',
  },
  loadingHandoutsErrorDescription: {
    id: 'course-authoring.course-updates.error.loading-handouts.description',
    defaultMessage: 'Không thể tải các tài liệu phát tay cho khóa học {courseId}. Vui lòng thử lại sau.',
    description: 'Alert body message for loading course handout errors',
  },
  savingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.saving-updates.title',
    defaultMessage: 'Lưu bản cập nhật thất bại',
    description: 'Alert title for saving updates error alert',
  },
  savingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.saving-updates.description',
    defaultMessage: 'Không thể lưu các thay đổi gần đây của bản cập nhật. Vui lòng thử lại sau.',
    description: 'Alert body message for saving edits to course update errors',
  },
  savingNewUpdateErrorAlertDescription: {
    id: 'course-authoring.course-updates.error.saving-new-updates.description',
    defaultMessage: 'Không thể lưu bản cập nhật khóa học mới. Vui lòng thử lại sau.',
    description: 'Alert body message for saving new course update errors',
  },
  savingHandoutsErrorTitle: {
    id: 'course-authoring.course-updates.error.saving-handouts.title',
    defaultMessage: 'Lưu tài liệu phát tay thất bại',
    description: 'Alert title for saving handouts error alert',
  },
  savingHandoutsErrorDescription: {
    id: 'course-authoring.course-updates.error.saving-handouts.description',
    defaultMessage: 'Không thể lưu các thay đổi gần đây của tài liệu phát tay. Vui lòng thử lại sau.',
    description: 'Alert body message for saving course handout errors',
  },
  deletingUpdatesErrorTitle: {
    id: 'course-authoring.course-updates.error.deleting-updates.title',
    defaultMessage: 'Xóa bản cập nhật thất bại',
    description: 'Alert title for deleting update error alert',
  },
  deletingUpdatesErrorDescription: {
    id: 'course-authoring.course-updates.error.deleting-updates.description',
    defaultMessage: 'Không thể xóa bản cập nhật đã chọn. Vui lòng thử lại sau.',
    description: 'Alert body message for deleting course update errors',
  },
});

export default messages;