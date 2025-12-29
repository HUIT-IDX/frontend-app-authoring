import { defineMessages } from '@edx/frontend-platform/i18n';
import { MAX_TOTAL_LENGTH } from '../../data/constants';

const messages = defineMessages({
  courseDisplayNameLabel: {
    id: 'course-authoring.create-or-rerun-course.display-name.label',
    defaultMessage: 'Tên khóa học',
  },
  courseDisplayNamePlaceholder: {
    id: 'course-authoring.create-or-rerun-course.display-name.placeholder',
    defaultMessage: 'Ví dụ: Nhập môn Khoa học Máy tính',
  },
  courseDisplayNameCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.display-name.help-text',
    defaultMessage: 'Tên hiển thị công khai cho khóa học của bạn. Thông tin này không thể thay đổi sau khi tạo, nhưng bạn có thể thiết lập tên hiển thị khác trong phần cài đặt nâng cao sau này.',
  },
  courseDisplayNameRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.display-name.help-text',
    defaultMessage: 'Tên hiển thị công khai cho khóa học mới. (Tên này thường giống với tên khóa học gốc.)',
  },
  courseOrgLabel: {
    id: 'course-authoring.create-or-rerun-course.org.label',
    defaultMessage: 'Tổ chức',
  },
  courseOrgPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.org.placeholder',
    defaultMessage: 'Ví dụ: UniversityX or OrganizationX',
  },
  courseOrgNoOptions: {
    id: 'course-authoring.create-or-rerun-course.org.no-options',
    defaultMessage: 'Không có lựa chọn nào',
  },
  courseOrgCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.org.help-text',
    defaultMessage: 'Tên của tổ chức bảo trợ khóa học. {strong} Thông tin này không thể thay đổi sau khi tạo, nhưng bạn có thể thiết lập tên hiển thị khác trong phần cài đặt nâng cao sau này.',
  },
  courseOrgRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.org.help-text',
    defaultMessage: 'Tên của tổ chức bảo trợ khóa học mới. (Tên này thường giống với tên tổ chức gốc.) {strong}',
  },
  courseNoteNoSpaceAllowedStrong: {
    id: 'course-authoring.create-or-rerun-course.no-space-allowed.strong',
    defaultMessage: 'Lưu ý: Không được phép sử dụng khoảng trắng hoặc ký tự đặc biệt.',
  },
  courseNoteOrgNameIsPartStrong: {
    id: 'course-authoring.create-or-rerun-course.org.help-text.strong',
    defaultMessage: 'Lưu ý: Tên tổ chức là một phần của đường dẫn (URL) khóa học.',
  },
  courseNumberLabel: {
    id: 'course-authoring.create-or-rerun-course.number.label',
    defaultMessage: 'Mã khóa học',
  },
  courseNumberPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.number.placeholder',
    defaultMessage: 'Ví dụ: CS101',
  },
  courseNumberCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.number.help-text',
    defaultMessage: 'Mã số duy nhất dùng để xác định khóa học của bạn trong tổ chức. {strong}',
  },
  courseNumberRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.number.help-text',
    defaultMessage: 'Mã số duy nhất dùng để xác định khóa học mới trong tổ chức. (Mã số này sẽ giống với mã số khóa học gốc và không thể thay đổi.)',
  },
  courseNotePartCourseURLRequireStrong: {
    id: 'course-authoring.create-or-rerun-course.number.help-text.strong',
    defaultMessage: 'Lưu ý: Đây là một phần của đường dẫn (URL) khóa học, vì vậy không được có khoảng trắng hoặc ký tự đặc biệt và không thể thay đổi.',
  },
  courseRunLabel: {
    id: 'course-authoring.create-or-rerun-course.run.label',
    defaultMessage: 'Kỳ học',
  },
  courseRunPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.run.placeholder',
    defaultMessage: 'Ví dụ: 2014_T1',
  },
  courseRunCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.run.help-text',
    defaultMessage: 'Học kỳ hoặc giai đoạn mà khóa học của bạn sẽ diễn ra. {strong}',
  },
  courseRunRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.rerun.help-text',
    defaultMessage: 'Học kỳ mà khóa học mới sẽ diễn ra. (Giá trị này thường khác với giá trị kỳ học của khóa học gốc.){strong}',
  },
  defaultPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.default-placeholder',
    defaultMessage: 'Nhãn',
  },
  createButton: {
    id: 'course-authoring.create-or-rerun-course.create.button.create',
    defaultMessage: 'Tạo mới',
  },
  rerunCreateButton: {
    id: 'course-authoring.create-or-rerun-course.rerun.button.create',
    defaultMessage: 'Tạo bản chạy lại',
  },
  creatingButton: {
    id: 'course-authoring.create-or-rerun-course.button.creating',
    defaultMessage: 'Đang tạo',
  },
  rerunningCreateButton: {
    id: 'course-authoring.create-or-rerun-course.rerun.button.rerunning',
    defaultMessage: 'Đang xử lý yêu cầu chạy lại',
  },
  cancelButton: {
    id: 'course-authoring.create-or-rerun-course.button.cancel',
    defaultMessage: 'Hủy',
  },
  requiredFieldError: {
    id: 'course-authoring.create-or-rerun-course.required.error',
    defaultMessage: 'Trường bắt buộc.',
  },
  disallowedCharsError: {
    id: 'course-authoring.create-or-rerun-course.disallowed-chars.error',
    defaultMessage: 'Vui lòng không sử dụng khoảng trắng hoặc ký tự đặc biệt trong trường này.',
  },
  noSpaceError: {
    id: 'course-authoring.create-or-rerun-course.no-space.error',
    defaultMessage: 'Vui lòng không sử dụng khoảng trắng trong trường này.',
  },
  totalLengthError: {
    id: 'course-authoring.create-or-rerun-course.total-length-error.error',
    defaultMessage: `Tổng độ dài kết hợp của các trường Tổ chức, Mã số khóa học và Kỳ học không được vượt quá ${MAX_TOTAL_LENGTH} ký tự.`,
  },
  alertErrorExistsAriaLabelledBy: {
    id: 'course-authoring.create-or-rerun-course.error.already-exists.labelledBy',
    defaultMessage: 'alert-already-exists-title',
  },
  alertErrorExistsAriaDescribedBy: {
    id: 'course-authoring.create-or-rerun-course.error.already-exists.aria.describedBy',
    defaultMessage: 'alert-confirmation-description',
  },
});

export default messages;
