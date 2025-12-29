import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  coursesTabTitle: {
    id: 'course-authoring.studio-home.courses.tab.title',
    defaultMessage: 'Khóa học',
  },
  courseTabErrorMessage: {
    id: 'course-authoring.studio-home.courses.tab.error.message',
    defaultMessage: 'Không thể tải danh sách khóa học. Vui lòng thử lại sau.',
  },
  coursesPaginationInfo: {
    id: 'course-authoring.studio-home.courses.pagination.info',
    defaultMessage: 'Hiển thị {length} trên tổng số {total}',
  },
  librariesTabErrorMessage: {
    id: 'course-authoring.studio-home.libraries.tab.error.message',
    defaultMessage: 'Không thể tải danh sách thư viện. Vui lòng thử lại sau.',
  },
  librariesTabTitle: {
    id: 'course-authoring.studio-home.libraries.tab.title',
    defaultMessage: 'Thư viện',
  },
  legacyLibrariesTabTitle: {
    id: 'course-authoring.studio-home.legacy.libraries.tab.title',
    defaultMessage: 'Thư viện cũ',
  },
  archivedTabTitle: {
    id: 'course-authoring.studio-home.archived.tab.title',
    defaultMessage: 'Khóa học đã lưu trữ',
  },
  archiveTabErrorMessage: {
    id: 'course-authoring.studio-home.archived.tab.error.message',
    defaultMessage: 'Không thể tải danh sách khóa học đã lưu trữ. Vui lòng thử lại sau.',
  },
  coursesTabCourseNotFoundAlertTitle: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.title',
    defaultMessage: 'Chúng tôi không tìm thấy kết quả nào',
  },
  coursesTabCourseNotFoundAlertMessage: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.message',
    defaultMessage: 'Không có khóa học nào khớp với bộ lọc hiện tại.',
  },
  coursesTabCourseNotFoundAlertCleanFiltersButton: {
    id: 'course-authoring.studio-home.courses.tab.course.not.found.alert.clean.filters.button',
    defaultMessage: 'Xóa bộ lọc',
  },
  taxonomiesTabTitle: {
    id: 'course-authoring.studio-home.taxonomies.tab.title',
    defaultMessage: 'Phân loại',
    description: 'Title of Taxonomies tab on the home page',
  },
  libraryV2PlaceholderTitle: {
    id: 'course-authoring.studio-home.libraries.placeholder.title',
    defaultMessage: 'Thư viện V2 (Bản tạm)',
  },
  libraryV2PlaceholderBody: {
    id: 'course-authoring.studio-home.libraries.placeholder.body',
    defaultMessage: 'Đây là trang tạm thời, do tính năng Soạn thảo thư viện (MFE) chưa được bật.',
  },
  librariesV2TabBetaBadge: {
    id: 'course-authoring.studio-home.libraries.tab.library.beta-badge',
    defaultMessage: 'Thử nghiệm',
    description: 'Text used to mark the Libraries v2 feature as "in beta"',
  },
  librariesV2TabLibrarySearchPlaceholder: {
    id: 'course-authoring.studio-home.libraries.tab.library.search-placeholder',
    defaultMessage: 'Tìm kiếm',
  },
  librariesV2TabLibraryNotFoundAlertTitle: {
    id: 'course-authoring.studio-home.libraries.tab.library.not.found.alert.title',
    defaultMessage: 'Chúng tôi không tìm thấy kết quả nào',
  },
  librariesV2TabLibraryNotFoundAlertMessage: {
    id: 'course-authoring.studio-home.libraries.tab.library.not.found.alert.message',
    defaultMessage: 'Không có thư viện nào khớp với bộ lọc hiện tại.',
  },
  alertTitle: {
    id: 'studio-home.libraries.migrate-alert.title',
    defaultMessage: 'Di chuyển các Thư viện cũ',
    description: 'Title for the alert message to migrate legacy libraries',
  },
  alertDescriptionV1: {
    id: 'studio-home.libraries.migrate-alert.description-v1',
    defaultMessage: 'Trong các phiên bản tới, các thư viện cũ sẽ không còn được hỗ trợ. Trải nghiệm thư viện mới cho phép bạn soạn thảo các phần, chương, đơn vị học tập và các thành phần để tái sử dụng trong nhiều khóa học. Nội dung từ các thư viện cũ có thể được chuyển sang trải nghiệm mới này.',
    description: 'Description for the alert message to migrate legacy libraries on legacy libraries tab.',
  },
  alertReviewButton: {
    id: 'studio-home.legacy-libraries.migrate-alert.review-button',
    defaultMessage: 'Xem lại các Thư viện cũ',
    description: 'Label for the button to review legacy libraries',
  },
  createLibraryButton: {
    id: 'studio-home.legacy-libraries.migrate.create-button',
    defaultMessage: 'Tạo Thư viện Mới',
    description: 'Label for the button to create a new library in the library list view.',
  },
  librariesV1TabMigrationFilterLabel: {
    id: 'course-authoring.studio-home.libraries.tab.migration.filter.label',
    description: 'Label text for migration filter in legacy libraries tab',
    defaultMessage: 'Mọi trạng thái di chuyển',
  },
  librariesV1TabMigrationFilterMigratedLabel: {
    id: 'course-authoring.studio-home.libraries.tab.migration.filter.item.migrated.label',
    description: 'Label text for migrated migration filter menu item in legacy libraries tab',
    defaultMessage: 'Đã di chuyển',
  },
  librariesV1TabMigrationFilterUnmigratedLabel: {
    id: 'course-authoring.studio-home.libraries.tab.migration.filter.item.unmigrated.label',
    description: 'Label text for unmigrated migration filter menu item in legacy libraries tab',
    defaultMessage: 'Chưa di chuyển',
  },
  alertDescriptionV2: {
    id: 'studio-home.libraries.migrate-alert.description-v2',
    defaultMessage: 'Chào mừng bạn đến với trải nghiệm Thư viện nội dung mới! Thư viện đã được thiết kế lại hoàn toàn, giúp việc tái sử dụng nội dung trở nên dễ dàng hơn nhiều. Bạn có thể tạo, tổ chức và quản lý nội dung mới, tái sử dụng nội dung trong bao nhiêu khóa học tùy thích, xuất bản các bản cập nhật và tạo/ngẫu nhiên hóa Ngân hàng câu hỏi. Xem {link} để biết thêm chi tiết.',
    description: 'Description for the alert message while there are no libraries pending migration on v2 tab.',
  },
  alertDescriptionV2MigrationPending: {
    id: 'studio-home.libraries.migrate-alert.description-v2.migration-pending',
    defaultMessage: ' Các thư viện cũ có thể được chuyển đổi bằng công cụ di chuyển.',
    description: 'Complementary description for the alert message while there are libraries pending migration.',
  },
  alertLibrariesDocLinkText: {
    id: 'studio-home.libraries.migrate-alert.docs',
    defaultMessage: 'Tài liệu hướng dẫn về Thư viện',
    description: 'Link text for the libraries documentation link.',
  },
  selectAll: {
    id: 'studio-home.libraries.migrate.select-all',
    defaultMessage: 'Chọn Tất cả',
    description: 'Button to select all libraries when migrate legacy libraries.',
  },
  libraryMigrationStatusText: {
    id: 'course-authoring.studio-home.library-v1.card.status',
    description: 'Thư viện đã được di chuyển trước đó. Mọi liên kết ngân hàng câu hỏi đã được chuyển đến',
    defaultMessage: 'Previously migrated library. Any problem bank links were already moved to',
  },
});

export default messages;
