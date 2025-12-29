import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-outline.headingTitle',
    defaultMessage: 'Đề cương khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.course-outline.subTitle',
    defaultMessage: 'Đề cương khóa học',
    description: 'Course Outline heading subTitle.',
  },
  alertSuccessTitle: {
    id: 'course-authoring.course-outline.reindex.alert.success.title',
    defaultMessage: 'Chỉ mục khóa học',
  },
  alertSuccessDescription: {
    id: 'course-authoring.course-outline.reindex.alert.success.description',
    defaultMessage: 'Khóa học đã được đánh chỉ mục thành công.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  newSectionButton: {
    id: 'course-authoring.course-outline.section-list.button.new-section',
    defaultMessage: 'Phần mới',
    description: 'Text of button to create new section in course outline',
  },
  useSectionFromLibraryButton: {
    id: 'course-authoring.course-outline.button.use-section-from-library',
    defaultMessage: 'Sử dụng phần từ thư viện',
    description: 'Text of the button to add a section from a library in a course.',
  },
  exportTagsCreatingToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.creating.message',
    defaultMessage: 'Vui lòng chờ. Đang tạo tệp xuất cho thẻ khóa học...',
    description: 'In progress message in toast when exporting tags of a course',
  },
  exportTagsSuccessToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.success.message',
    defaultMessage: 'Xuất thẻ khóa học thành công',
    description: 'Success message in toast when exporting tags of a course',
  },
  exportTagsErrorToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.error.message',
    defaultMessage: 'Đã xảy ra lỗi khi tạo tệp',
    description: 'Error message in toast when exporting tags of a course',
  },
  newUnitButton: {
    id: 'course-authoring.course-outline.button.new-unit',
    defaultMessage: 'Đơn vị học tập mới',
    description: 'Message of the button to create a new unit in a subsection.',
  },
  useUnitFromLibraryButton: {
    id: 'course-authoring.course-outline.button.use-unit-from-library',
    defaultMessage: 'Sử dụng đơn vị học tập từ thư viện',
    description: 'Message of the button to add a new unit from a library in a subsection.',
  },
  newSubsectionButton: {
    id: 'course-authoring.course-outline.button.new-subsection',
    defaultMessage: 'Chương mới',
    description: 'Text of button to create new subsection in a section',
  },
  useSubsectionFromLibraryButton: {
    id: 'course-authoring.course-outline.button.use-subsection-from-library',
    defaultMessage: 'Sử dụng chương từ thư viện',
    description: 'Message of the button to add a new subsection from a library in a subsection.',
  },
  sectionPickerModalTitle: {
    id: 'course-authoring.course-outline.button.section-modal.title',
    defaultMessage: 'Chọn phần',
    description: 'Section modal picker title text in outline',
  },
});

export default messages;
