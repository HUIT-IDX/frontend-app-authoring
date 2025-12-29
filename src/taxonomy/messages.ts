import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerTitle: {
    id: 'course-authoring.taxonomy-list.header.title',
    defaultMessage: 'Phân loại',
  },
  downloadTemplateButtonLabel: {
    id: 'course-authoring.taxonomy-list.button.download-template.label',
    defaultMessage: 'Tải xuống mẫu',
  },
  downloadTemplateButtonCSVLabel: {
    id: 'course-authoring.taxonomy-list.button.download-template.csv.label',
    defaultMessage: 'Mẫu CSV',
  },
  downloadTemplateButtonJSONLabel: {
    id: 'course-authoring.taxonomy-list.button.download-template.json.label',
    defaultMessage: 'Mẫu JSON',
  },
  downloadTemplateButtonHint: {
    id: 'course-authoring.taxonomy-list.button.download-template.hint',
    defaultMessage: 'Tải phân loại mẫu',
  },
  importButtonLabel: {
    id: 'course-authoring.taxonomy-list.button.import.label',
    defaultMessage: 'Nhập dữ liệu',
  },
  orgInputSelectDefaultValue: {
    id: 'course-authoring.taxonomy-list.select.org.default',
    defaultMessage: 'Tất cả phân loại',
  },
  orgAllValue: {
    id: 'course-authoring.taxonomy-list.select.org.all',
    defaultMessage: 'Tất cả',
  },
  orgUnassignedValue: {
    id: 'course-authoring.taxonomy-list.select.org.unassigned',
    defaultMessage: 'Chưa gán',
  },
  usageLoadingMessage: {
    id: 'course-authoring.taxonomy-list.spinner.loading',
    defaultMessage: 'Đang tải',
  },
  taxonomyDeleteToast: {
    id: 'course-authoring.taxonomy-list.toast.delete',
    defaultMessage: '"{name}" đã bị xóa',
  },
  importInProgressAlertDescription: {
    id: 'course-authoring.import-tags.prompt.in-progress',
    defaultMessage: 'Vui lòng giữ cửa sổ này mở. Chúng tôi sẽ thông báo cho bạn khi hoàn tất.',
    description: 'Alert message when the taxonomy import is in progress.',
  },
});

export default messages;
