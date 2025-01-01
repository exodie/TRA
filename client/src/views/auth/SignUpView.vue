<script setup lang="ts">
import { useRouter } from 'vue-router'
import { z } from 'zod'
import { useToast } from 'primevue/usetoast'
import { zodResolver } from '@primevue/forms/resolvers/zod'

import { REDIRECT_SIGNIN } from '@/shared/constants'

const router = useRouter()
const toast = useToast()

// TODO: Create as utils fc with args?
const redirectToSignIn = () => {
  router.push(REDIRECT_SIGNIN)
}

const resolver = zodResolver(
  z.object({
    username: z.string().min(3, { message: 'Username is required.' }),
    password: z.string().min(8, { message: 'Password short or null.' }),
    repeatPassword: z.string().min(8, { message: 'Password short or null.' }),
  }),
)

// TODO: /v1/user/signup handle
const onFormSubmit = ({ valid }: { valid: boolean }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Form is submitted.',
      life: 3000,
    })
  }

  console.log()
}
</script>

<template>
  <Toast />

  <Form :resolver @submit="onFormSubmit" class="auth_form_container">
    <h1>Sign Up</h1>

    <FormField v-slot="$field" as="section" name="username" initialValue="">
      <InputText type="text" placeholder="Username" class="wfull" />
      <Message
        v-if="$field?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $field.error?.message }}
      </Message>
    </FormField>
    <FormField v-slot="$field" asChild name="password" initialValue="">
      <section>
        <Password
          type="text"
          placeholder="Password"
          :feedback="false"
          toggleMask
          fluid
        />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $field.error?.message }}
        </Message>
      </section>
    </FormField>
    <FormField v-slot="$field" asChild name="repeatPassword" initialValue="">
      <section>
        <Password
          type="text"
          placeholder="Repeat password"
          :feedback="false"
          toggleMask
          fluid
        />
        <Message
          v-if="$field?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $field.error?.message }}
        </Message>
      </section>
    </FormField>

    <div class="auth_form_footer">
      <Button type="submit">Submit</Button>
      <Button @click="redirectToSignIn" severity="secondary">Sign in</Button>
    </div>
  </Form>
</template>
