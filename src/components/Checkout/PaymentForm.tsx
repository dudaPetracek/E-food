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

interface PaymentFormProps {
  initialValues?: PaymentFormValues | null
  onSubmit: (values: PaymentFormValues) => void
  onBack: () => void
  totalAmount: number
  onChange?: (values: PaymentFormValues) => void
}

const paymentSchema = Yup.object().shape({
  cardName: Yup.string()
    .required('Campo obrigatório')
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      'Não são permitidos números ou caracteres especiais'
    ),
  cardNumber: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número de cartão inválido'),
  cardCode: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{3}$/, 'CVV inválido'),
  expirationMonth: Yup.string()
    .required('Campo obrigatório')
    .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido'),
  expirationYear: Yup.string()
    .required('Campo obrigatório')
    .matches(/^\d{4}$/, 'Ano inválido')
})

const defaultValues: PaymentFormValues = {
  cardName: '',
  cardNumber: '',
  cardCode: '',
  expirationMonth: '',
  expirationYear: ''
}

const PaymentForm = ({
  initialValues,
  onSubmit,
  onBack,
  totalAmount,
  onChange
}: PaymentFormProps) => {
  return (
    <S.FormContainer>
      <S.CloseButton onClick={onBack}>
        <img src={closeIcon} alt="Fechar" />
      </S.CloseButton>
      <S.Title>Pagamento - Valor a pagar R$ {totalAmount.toFixed(2)}</S.Title>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={paymentSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values }) => (
          <Form onChange={() => onChange && onChange(values)}>
            <S.InputGroup>
              <S.Label htmlFor="cardName">Nome no cartão</S.Label>
              <Field
                as={S.Input}
                id="cardName"
                name="cardName"
                className={errors.cardName && touched.cardName ? 'error' : ''}
              />
              <FormikErrorMessage name="cardName" component={S.ErrorMessage} />
            </S.InputGroup>

            <S.InputRow>
              <S.InputGroup>
                <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
                <Field name="cardNumber">
                  {({ field }: FieldProps) => (
                    <S.Input
                      {...field}
                      id="cardNumber"
                      mask="9999 9999 9999 9999"
                      type="text"
                      className={
                        errors.cardNumber && touched.cardNumber ? 'error' : ''
                      }
                      as={TextMaskCustom}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e)
                        setTimeout(() => onChange && onChange(values), 0)
                      }}
                    />
                  )}
                </Field>
                <FormikErrorMessage
                  name="cardNumber"
                  component={S.ErrorMessage}
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="cardCode">CVV</S.Label>
                <Field name="cardCode">
                  {({ field, form }: FieldProps) => (
                    <S.Input
                      {...field}
                      id="cardCode"
                      type="text"
                      maxLength={3}
                      className={
                        errors.cardCode && touched.cardCode ? 'error' : ''
                      }
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        // Only allow digits
                        const value = e.target.value.replace(/\D/g, '')
                        if (value.length <= 3) {
                          form.setFieldValue('cardCode', value)
                          setTimeout(
                            () =>
                              onChange &&
                              onChange({
                                ...values,
                                cardCode: value
                              }),
                            0
                          )
                        }
                      }}
                    />
                  )}
                </Field>
                <FormikErrorMessage
                  name="cardCode"
                  component={S.ErrorMessage}
                />
              </S.InputGroup>
            </S.InputRow>

            <S.InputRow>
              <S.InputGroup>
                <S.Label htmlFor="expirationMonth">Mês de vencimento</S.Label>
                <Field name="expirationMonth">
                  {({ field }: FieldProps) => (
                    <S.Input
                      {...field}
                      id="expirationMonth"
                      mask="99"
                      type="text"
                      className={
                        errors.expirationMonth && touched.expirationMonth
                          ? 'error'
                          : ''
                      }
                      as={TextMaskCustom}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e)
                        setTimeout(() => onChange && onChange(values), 0)
                      }}
                    />
                  )}
                </Field>
                <FormikErrorMessage
                  name="expirationMonth"
                  component={S.ErrorMessage}
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="expirationYear">Ano de vencimento</S.Label>
                <Field name="expirationYear">
                  {({ field }: FieldProps) => (
                    <S.Input
                      {...field}
                      id="expirationYear"
                      mask="9999"
                      type="text"
                      className={
                        errors.expirationYear && touched.expirationYear
                          ? 'error'
                          : ''
                      }
                      as={TextMaskCustom}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e)
                        setTimeout(() => onChange && onChange(values), 0)
                      }}
                    />
                  )}
                </Field>
                <FormikErrorMessage
                  name="expirationYear"
                  component={S.ErrorMessage}
                />
              </S.InputGroup>
            </S.InputRow>

            <S.Button type="submit">Finalizar pagamento</S.Button>
            <S.Button type="button" onClick={onBack}>
              Voltar para a edição de endereço
            </S.Button>
          </Form>
        )}
      </Formik>
    </S.FormContainer>
  )
}

export default PaymentForm
