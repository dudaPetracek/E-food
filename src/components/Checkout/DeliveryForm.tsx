import React from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
  FieldProps
} from 'formik'
import * as Yup from 'yup'
import * as S from './styles'
import { TextMaskCustom } from './TextMaskCustom'
import closeIcon from '../../assets/images/close.png'

interface DeliveryFormProps {
  initialValues?: DeliveryFormValues | null
  onSubmit: (values: DeliveryFormValues) => void
  onCancel: () => void
}

const deliverySchema = Yup.object().shape({
  receiver: Yup.string()
    .required('Campo obrigatório')
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      'Não são permitidos números ou caracteres especiais'
    ),
  address: Yup.string()
    .required('Campo obrigatório')
    .matches(/^[a-zA-ZÀ-ÿ0-9\s,.]+$/, 'Formato de endereço inválido'),
  city: Yup.string()
    .required('Campo obrigatório')
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      'Não são permitidos números ou caracteres especiais'
    ),
  zipCode: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'Formato de CEP inválido (99999-999)'),
  number: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{1,5}$/, 'Apenas números são permitidos, máximo 5 dígitos'),
  complement: Yup.string()
})

const defaultValues: DeliveryFormValues = {
  receiver: '',
  address: '',
  city: '',
  zipCode: '',
  number: '',
  complement: ''
}

const DeliveryForm = ({
  initialValues,
  onSubmit,
  onCancel
}: DeliveryFormProps) => {
  return (
    <S.FormContainer>
      <S.CloseButton onClick={onCancel}>
        <img src={closeIcon} alt="Fechar" />
      </S.CloseButton>
      <S.Title>Entrega</S.Title>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={deliverySchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <S.InputGroup>
              <S.Label htmlFor="receiver">Quem irá receber</S.Label>
              <Field
                as={S.Input}
                id="receiver"
                name="receiver"
                className={errors.receiver && touched.receiver ? 'error' : ''}
              />
              <FormikErrorMessage name="receiver" component={S.ErrorMessage} />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="address">Endereço</S.Label>
              <Field
                as={S.Input}
                id="address"
                name="address"
                className={errors.address && touched.address ? 'error' : ''}
              />
              <FormikErrorMessage name="address" component={S.ErrorMessage} />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="city">Cidade</S.Label>
              <Field
                as={S.Input}
                id="city"
                name="city"
                className={errors.city && touched.city ? 'error' : ''}
              />
              <FormikErrorMessage name="city" component={S.ErrorMessage} />
            </S.InputGroup>

            <S.InputRow>
              <S.InputGroup>
                <S.Label htmlFor="zipCode">CEP</S.Label>
                <Field name="zipCode">
                  {({ field }: FieldProps) => (
                    <S.Input
                      {...field}
                      id="zipCode"
                      mask="99999-999"
                      type="text"
                      className={
                        errors.zipCode && touched.zipCode ? 'error' : ''
                      }
                      as={TextMaskCustom}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e)
                      }}
                    />
                  )}
                </Field>
                <FormikErrorMessage name="zipCode" component={S.ErrorMessage} />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="number">Número</S.Label>
                <Field name="number">
                  {({ field, form }: FieldProps) => (
                    <S.Input
                      {...field}
                      id="number"
                      type="text"
                      maxLength={5}
                      className={errors.number && touched.number ? 'error' : ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        // Only allow digits
                        const value = e.target.value.replace(/\D/g, '')
                        if (value.length <= 5) {
                          form.setFieldValue('number', value)
                        }
                      }}
                    />
                  )}
                </Field>
                <FormikErrorMessage name="number" component={S.ErrorMessage} />
              </S.InputGroup>
            </S.InputRow>

            <S.InputGroup>
              <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
              <Field
                as={S.Input}
                id="complement"
                name="complement"
                maxLength={30}
              />
            </S.InputGroup>

            <S.Button type="submit">Continuar com o pagamento</S.Button>
            <S.Button type="button" onClick={onCancel}>
              Voltar para o carrinho
            </S.Button>
          </Form>
        )}
      </Formik>
    </S.FormContainer>
  )
}

export default DeliveryForm
