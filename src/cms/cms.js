import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import NowPagePreview from './preview-templates/NowPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

import withStyled from "./with-styled";

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', withStyled(IndexPagePreview));
CMS.registerPreviewTemplate('now', withStyled(NowPagePreview));
CMS.registerPreviewTemplate('blog', withStyled(BlogPostPreview));
