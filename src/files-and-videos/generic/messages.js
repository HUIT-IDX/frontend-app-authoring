import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  rowStatusMessage: {
    id: 'course-authoring.files-and-upload.rowStatus.message',
    defaultMessage: 'Hiển thị {fileCount} trên tổng số {rowCount}',
    description: 'This message is showed to notify user of the number of files being shown',
  },
  apiStatusToastMessage: {
    id: 'course-authoring.files-and-upload.apiStatus.message',
    defaultMessage: '{actionType} {selectedRowCount} {selectedRowCount, plural, one {{fileType}} other {{fileType}s}}',
    description: 'This message is showed in the toast when action is applied to files',
  },
  apiStatusAddingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.addingAction.message',
    defaultMessage: 'Đang thêm',
    description: 'This message is used in the toast when files are added',
  },
  apiStatusDeletingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.deletingAction.message',
    defaultMessage: 'Đang xóa',
    description: 'This message is used in the toast when files are deleted',
  },
  apiStatusDownloadingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.downloadingAction.message',
    defaultMessage: 'Đang tải xuống',
    description: 'This message is used in the toast when files are downloaded',
  },
  fileSizeError: {
    id: 'course-authoring.files-and-upload.addFiles.error.fileSize',
    defaultMessage: 'Tệp tin được tải lên phải có kích thước nhỏ hơn hoặc bằng 20 MB. Vui lòng thu nhỏ kích thước tệp tin và thử lại.',
    description: 'This error message is shown when user tries to upload a file larger than 20 MB',
  },
  noResultsFoundMessage: {
    id: 'course-authoring.files-and-upload.table.noResultsFound.message',
    defaultMessage: 'Không tìm thấy kết quả nào',
    description: 'This message is shown when no files are found based on name search',
  },
  addFilesButtonLabel: {
    id: 'course-authoring.files-and-upload.addFiles.button.label',
    defaultMessage: 'Thêm {fileType}s',
    description: 'Label for add files button, name changes based on page',
  },
  actionsButtonLabel: {
    id: 'course-authoring.files-and-upload.action.button.label',
    defaultMessage: 'Hành động',
    description: 'Label for actions dropdown button',
  },
  errorAlertMessage: {
    id: 'course-authoring.files-and-upload.errorAlert.message',
    defaultMessage: '{message}',
    description: 'Message shell for error alert',
  },
  transcriptionErrorMessage: {
    id: 'course-authoring.files-and-uploads.file-info.transcripts.error.alert',
    defaultMessage: 'Lỗi bản ghi phụ đề: "{error}"',
    description: 'Message for transcript error in info modal',
  },
  usageTitle: {
    id: 'course-authoring.files-and-uploads.file-info.usage.title',
    defaultMessage: 'Sử dụng',
    description: 'Title for usage information section in info modal',
  },
  usageLoadingMessage: {
    id: 'course-authoring.files-and-uploads.file-info.usage.loading.message',
    defaultMessage: 'Đang tải',
    description: 'Screen reader text for loading spinner in usage information section',
  },
  usageNotInUseMessage: {
    id: 'course-authoring.files-and-uploads.file-info.usage.notInUse.message',
    defaultMessage: 'Hiện tại không được sử dụng',
    description: 'Message for usage information section when file is not used in course',
  },
  copyVideoIdTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyVideoIdTitle',
    defaultMessage: 'Sao chép ID video',
    description: 'Label for copy video id button in card menu dropdown',
  },
  copyStudioUrlTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyStudioUrlTitle',
    defaultMessage: 'Sao chép URL Studio',
    description: 'Label for copy studio url button in card menu dropdown',
  },
  copyWebUrlTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyWebUrlTitle',
    defaultMessage: 'Sao chép URL Web',
    description: 'Label for copy web url button in card menu dropdown',
  },
  downloadTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.downloadTitle',
    defaultMessage: 'Tải xuống',
    description: 'Label for download button in card menu dropdown',
  },
  lockMenuTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.lockTitle',
    defaultMessage: 'Khóa',
    description: 'Label for lock button in card menu dropdown',
  },
  lockFileTooltipContent: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.tooltip.content',
    defaultMessage: `Mặc định, bất kỳ ai cũng có thể truy cập tệp bạn tải lên nếu họ biết URL web, ngay cả khi họ không tham gia khóa học. Bạn có thể ngăn chặn truy cập bên ngoài bằng cách khóa tệp. Khi đó, URL web chỉ cho phép những học viên đã đăng ký khóa học và đã đăng nhập mới có thể truy cập.`,
    description: 'Tooltip message for the lock icon in the table view of files',
  },
  unlockMenuTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.unlockTitle',
    defaultMessage: 'Mở khóa',
    description: 'Label for unlock button in card menu dropdown',
  },
  infoTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.infoTitle',
    defaultMessage: 'Thông tin',
    description: 'Label for info button in card menu dropdown',
  },
  downloadEncodingsTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.downloadEncodingsTitle',
    defaultMessage: 'Tải xuống danh sách video (.csv)',
    description: 'Label for download video list button in actions dropdown',
  },
  deleteTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.deleteTitle',
    defaultMessage: 'Xóa',
    description: 'Label for delete button in card menu dropdown',
  },
  deleteConfirmationTitle: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.title',
    defaultMessage: 'Xóa {fileNumber, plural, one {{fileName}} other {{fileNumber} {fileType}s}}',
    description: 'Title for delete confirmation modal',
  },
  deleteConfirmationMessage: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.message',
    defaultMessage: `
      Bạn có chắc chắn muốn xóa {fileNumber, plural, one {{fileName}} other {{fileNumber} {fileType}}} không? Hành động này không thể hoàn tác và có thể làm hỏng khóa học nếu {fileNumber, plural, one {tệp này} other {các tệp này}} đang được sử dụng trong nội dung khóa học, cài đặt nâng cao, cập nhật hoặc lịch trình.
    `,
    description: 'Message presented to user listing the number of files they are attempting to delete in the delete confirmation modal',
  },
  deleteConfirmationUsageMessage: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.usage-message',
    defaultMessage: '{fileNumber, plural, one {Tệp} other {Các tệp}} sau đây đang được sử dụng trong nội dung khóa học. Hãy cân nhắc cập nhật nội dung trước khi xóa.',
    description: 'Message listing where the files the user is attempting to delete are used in the course',
  },
  deleteFileButtonLabel: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.deleteFile.label',
    defaultMessage: 'Xóa',
    description: 'Label for delete button in delete confirmation modal modal',
  },
  cancelButtonLabel: {
    id: 'course-authoring.files-and-uploads.cancelButton.label',
    defaultMessage: 'Hủy bỏ',
    description: 'Label for cancel button in modals',
  },
  sortButtonLabel: {
    id: 'course-authoring.files-and-uploads.sortButton.label',
    defaultMessage: 'Sắp xếp và lọc',
    description: 'Label for button that opens the sort and filter modal',
  },
  sortModalTitleLabel: {
    id: 'course-authoring.files-and-uploads.sortModal.title',
    defaultMessage: 'Sắp xếp theo',
    description: 'Title for Sort By secition in sort and filter modal',
  },
  sortByNameAscending: {
    id: 'course-authoring.files-and-uploads.sortByNameAscendingButton.label',
    defaultMessage: 'Tên (A-Z)',
    description: 'Label for ascending name radio button in sort and filter modal',
  },
  sortByNewest: {
    id: 'course-authoring.files-and-uploads.sortByNewestButton.label',
    defaultMessage: 'Mới nhất',
    description: 'Label for descending date added radio button in sort and filter modal',
  },
  sortBySizeDescending: {
    id: 'course-authoring.files-and-uploads.sortBySizeDescendingButton.label',
    defaultMessage: 'Kích thước tệp (Lớn đến Nhỏ)',
    description: 'Label for descending file size radio button in sort and filter modal',
  },
  sortByNameDescending: {
    id: 'course-authoring.files-and-uploads.sortByNameDescendingButton.label',
    defaultMessage: 'Tên (Z-A)',
    description: 'Label for descending name radio button in sort and filter modal',
  },
  sortByOldest: {
    id: 'course-authoring.files-and-uploads.sortByOldestButton.label',
    defaultMessage: 'Cũ nhất',
    description: 'Label for ascending date added radio button in sort and filter modal',
  },
  sortBySizeAscending: {
    id: 'course-authoring.files-and-uploads.sortBySizeAscendingButton.label',
    defaultMessage: 'Kích thước tệp (Nhỏ đến Lớn)',
    description: 'Label for ascending file size radio button in sort and filter modal',
  },
  applySortButton: {
    id: 'course-authoring.files-and-uploads.applyySortButton.label',
    defaultMessage: 'Áp dụng',
    description: 'Label for apply sort button in sort and filter modal',
  },
  failedLabel: {
    id: 'course-authoring.files-and-uploads.filter.failed.label',
    defaultMessage: 'Thất bại',
    description: 'Label for failed sort button in sort and filter modal',
  },
  uploadErrorAlertTitle: {
    id: 'course-authoring.files-and-uploads.error.upload.title',
    defaultMessage: 'Lỗi tải lên',
    description: 'Title for upload error alert',
  },
  fileInputAriaLabel: {
    id: 'course-authoring.files-and-uploads.fileInput.ariaLabel',
    defaultMessage: 'Tải lên một tệp',
    description: 'Accessible (screen reader) label for file input',
  },
});

export default messages;
