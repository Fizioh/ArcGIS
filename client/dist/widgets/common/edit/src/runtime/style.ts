import { ThemeVariables, css, SerializedStyles, polished } from 'jimu-core'

export function getStyle (theme: ThemeVariables, id: string, featureFormStep: 'empty' | 'list' | 'form' | 'new', editCount: number, isAttrMode: boolean): SerializedStyles {
  return css`
    ${'&.edit-widget-' + id} {
      .esri-editor__content{
        background-color: ${theme.colors.white};
        padding: 8px 16px;
      }
      .esri-feature-form{
        ${(featureFormStep === 'empty' || featureFormStep === 'list') && `border-bottom: 1px solid ${theme.colors.palette.light[200]};`}
        background-color: ${theme.colors.white};
        .esri-feature-form__form-header{
          margin: 0;
          ${featureFormStep === 'form' && 'display: none;'}
          .esri-feature-form__description-text{
            font-weight: 500;
            font-size: 13px;
          }
        }
      }
      .esri-feature-templates{
        width: 100%;
        height: calc(100% - 40px);
        .esri-item-list{
          height: 100%;
          .esri-item-list__scroller{
            height: 100%;
          }
        }
      }
      .esri-editor__temp-wrapper{
        height: 100%;
      }
      .esri-editor__header{
        min-height: 56px;
        padding-left: ${(!isAttrMode || editCount === 1) ? '15px' : '35px'};
        .esri-widget__heading{
          font-weight: 600;
          font-size: 16px;
          margin: 2px 8px;
          text-align: left;
        }
      }
      .esri-editor__controls{
        ${!isAttrMode && 'justify-content: space-between !important; flex-direction: row !important;'}
        .esri-editor__control-button:first-of-type{
          color: ${theme.colors.white};
          background-color: ${theme.colors.palette.primary[500]};
          border: 1px solid ${theme.colors.palette.primary[500]};
          :hover{
            background-color: ${theme.colors.palette.primary[600]};
          }
        }
        .esri-editor__control-button{
          color: ${theme.colors.palette.dark[800]};
          background-color: ${theme.colors.white};
          border: 1px solid ${theme.colors.palette.light[400]};
          :hover{
            background-color: ${theme.colors.palette.light[100]};
          }
        }
        .esri-editor__control-button + .esri-editor__control-button{
          margin-left: 2%;
        }
      }
      .esri-editor__feature-list-item,
      .esri-item-list__list-item{
        border-color:  ${theme.colors.palette.light[200]};
        box-shadow: unset;
        :hover{
          border-color: ${theme.colors.palette.dark[300]};
        }
      }
      .esri-editor__warning-card{
        border-top: none;
        .esri-icon-notice-triangle{
          color: ${theme.colors.palette.danger[500]};
          font-size: 22px;
          margin-right: 8px;
        }
        .esri-editor__warning-heading{
          font-size: 16px;
          font-weight: 500;
          color: ${theme.colors.black};
        }
        .esri-editor__warning-message{
          font-weight: 500;
          font-size: 13px;
        }
        .esri-editor__warning-option--primary,
        .esri-editor__warning-option--positive,
        .esri-editor__warning-option--negative{
          text-align: center;
          padding: ${polished.rem(4)} ${polished.rem(16)};
          line-height: ${polished.rem(22)};
          border-radius: 2px;
        }
        .esri-editor__warning-option--primary{
          border: 1px solid ${theme.colors.palette.light[200]};
        }
        .esri-editor__warning-option--positive,
        .esri-editor__warning-option--negative{
          color: ${theme.colors.white};
          background-color: ${theme.colors.palette.danger[500]};
        }
      }
      .attr-height{
        overflow-y: auto;
        height: calc(100% - 112px);
        background-color: ${theme.colors.white};
      }
      .snapping-option{
        position: absolute;
        top: 170px;
        width: calc(100% - 33px);
        margin: 10px 16px;
        padding: 16px 7px 10px;
        border-top: 1px solid ${theme.colors.palette.light[300]};
        .snapping-item{
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }
      }
      .feature-list{
        height: calc(100% - 76px);
        max-height: unset;
        .esri-editor__scroller{
          max-height: unset;
        }
      }
      .esri-editor__scroller{
        max-height: unset;
        .esri-item-list__scroller{
          max-height: unset;
        }
      }
      .layer-selector{
        padding: 12px 15px;
      }
      .single-buttons{
        flex: 1;
      }
      .multi-buttons{
        width: 49%;
      }
      .add-feature-btn{
        position: absolute;
        right: 15px;
        top: 12px;
        button{
          width: 32px;
          height: 32px;
        }
      }
      .back-list-btn{
        position: absolute;
        left: 15px;
        top: 15px;
      }
      .edit-blank{
        min-height: 300px;
        .placeholder-icon{
          color: ${theme.colors.palette.dark[200]};
        }
        & > div{
          top: calc(50% + 20px);
          transform: translateY(-50%);
        }
        p{
          font-size: ${polished.rem(14)};
          margin-top: ${polished.rem(16)};
          line-height: ${polished.rem(19)};
          color: ${theme.colors.palette.dark[500]};
        }
      }
    }
  `
}
