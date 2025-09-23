<script setup lang="ts">
type FormFields = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  agree: boolean;
  website: string;
  venuePostcode: string;
  datePreferred: string;
  birthdayDate: string;
  age: string;
  partyName: string;
  school: string;
  yearGroup: string;
  childName: string;
};

// Production defaults (all empty)
const formDefaults: FormFields = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
  agree: false,
  website: "",
  venuePostcode: "",
  datePreferred: "",
  birthdayDate: "",
  age: "",
  partyName: "",
  school: "",
  yearGroup: "",
  childName: "",
};

const form = ref<FormFields>({ ...formDefaults });
const errors = ref<Record<string, string>>({});
const submitted = ref(false);
const failed = ref(false);
const touched = ref(false);

const validate = (): boolean => {
  errors.value = {};
  if (!form.value.name) errors.value.name = "Name is required";
  if (!form.value.email.includes("@"))
    errors.value.email = "Valid email required";
  if (!form.value.phone) errors.value.phone = "Phone number is required";
  if (!form.value.enquiryType)
    errors.value.enquiryType = "Please select enquiry type";
  if (!form.value.message) errors.value.message = "Message is required";
  if (!form.value.agree)
    errors.value.agree = "Please accept the terms to proceed";

  if (form.value.enquiryType === "Parties") {
    if (!form.value.venuePostcode)
      errors.value.venuePostcode = "Venue postcode required";
    if (!form.value.datePreferred)
      errors.value.datePreferred = "Preferred date required";
    if (!form.value.birthdayDate)
      errors.value.birthdayDate = "Birthday date required";
    if (!form.value.age) errors.value.age = "Child’s age required";
  }

  if (form.value.enquiryType === "Clubs") {
    if (!form.value.school) errors.value.school = "School is required";
    if (!form.value.yearGroup) errors.value.yearGroup = "Year group required";
    if (!form.value.childName) errors.value.childName = "Child’s name required";
  }

  return Object.keys(errors.value).length === 0;
};

// ✅ Reactive: now returns validate() result directly
const isValid = computed(() => {
  if (!touched.value) return false;
  return validate();
});

const handleSubmit = async () => {
  touched.value = true;
  if (!validate()) return;

  try {
    const formEl = document.querySelector<HTMLFormElement>(
      'form[name="contact"]'
    );
    if (!formEl) return;

    const formData = new FormData(formEl);
    const res = await fetch("/", { method: "POST", body: formData });

    if (res.ok) {
      submitted.value = true;
      failed.value = false;
      form.value = { ...formDefaults }; // reset form
      errors.value = {}; // clear errors
      // keep touched = true so errors remain hidden until next submit
    } else {
      throw new Error("Netlify submission failed");
    }
  } catch (err) {
    console.error(err);
    submitted.value = false;
    failed.value = true;
  }
};
watch(
  form,
  () => {
    console.log("Form changed:", form.value);
    console.log("Validation result:", validate());
  },
  { deep: true }
);

watch(isValid, (val) => {
  console.log("isValid:", val);
});
</script>

<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="website"
    class="w-full"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p class="hidden">
      <label>
        Don’t fill this out: <input v-model="form.website" name="website" />
      </label>
    </p>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl w-full">
      <!-- Name -->
      <div class="md:text-end">
        <label for="name">Name</label>
      </div>
      <div>
        <input
          id="name"
          v-model="form.name"
          name="name"
          type="text"
          class="w-full p-2 rounded"
          autocomplete="name"
        />
        <p v-if="touched && errors.name" class="text-red-600 text-sm">
          {{ errors.name }}
        </p>
      </div>

      <!-- Email -->
      <div class="md:text-end">
        <label for="email">Email</label>
      </div>
      <div>
        <input
          id="email"
          v-model="form.email"
          name="email"
          type="email"
          class="w-full p-2 rounded"
          placeholder="Your best email"
          autocomplete="email"
        />
        <p v-if="touched && errors.email" class="text-red-600 text-sm">
          {{ errors.email }}
        </p>
      </div>

      <!-- Phone -->
      <div class="md:text-end">
        <label for="phone">Phone</label>
      </div>
      <div>
        <input
          id="phone"
          v-model="form.phone"
          name="phone"
          type="tel"
          class="w-full p-2 rounded"
          placeholder="Your best contact number"
          autocomplete="tel"
        />
        <p v-if="touched && errors.phone" class="text-red-600 text-sm">
          {{ errors.phone }}
        </p>
      </div>

      <!-- Enquiry Type -->
      <div class="md:text-end">
        <label for="enquiryType">Enquiry Type</label>
      </div>
      <div>
        <select
          id="enquiryType"
          v-model="form.enquiryType"
          name="enquiryType"
          class="w-full p-2 rounded"
        >
          <option value="">Select</option>
          <option value="Parties">Parties</option>
          <option value="Clubs">Clubs</option>
          <option value="Camps">Camps</option>
          <option value="Other">Other</option>
        </select>
        <p v-if="touched && errors.enquiryType" class="text-red-600 text-sm">
          {{ errors.enquiryType }}
        </p>
      </div>

      <!-- Conditional fields: Parties -->
      <template v-if="form.enquiryType === 'Parties'">
        <div class="md:text-end">
          <label for="venuePostcode">Venue Postcode</label>
        </div>
        <div>
          <input
            id="venuePostcode"
            v-model="form.venuePostcode"
            name="venuePostcode"
            class="w-full p-2 rounded"
          />
          <p
            v-if="touched && errors.venuePostcode"
            class="text-red-600 text-sm"
          >
            {{ errors.venuePostcode }}
          </p>
        </div>

        <div class="md:text-end">
          <label for="datePreferred">Preferred Date</label>
        </div>
        <div>
          <input
            id="datePreferred"
            v-model="form.datePreferred"
            name="datePreferred"
            type="date"
            class="w-full p-2 rounded"
          />
          <p
            v-if="touched && errors.datePreferred"
            class="text-red-600 text-sm"
          >
            {{ errors.datePreferred }}
          </p>
        </div>

        <div class="md:text-end">
          <label for="birthdayDate">Child’s Birthday</label>
        </div>
        <div>
          <input
            id="birthdayDate"
            v-model="form.birthdayDate"
            name="birthdayDate"
            type="date"
            class="w-full p-2 rounded"
          />
          <p v-if="touched && errors.birthdayDate" class="text-red-600 text-sm">
            {{ errors.birthdayDate }}
          </p>
        </div>

        <div class="md:text-end">
          <label for="age">Child’s Age</label>
        </div>
        <div>
          <input
            id="age"
            v-model="form.age"
            name="age"
            type="number"
            class="w-full p-2 rounded"
          />
          <p v-if="touched && errors.age" class="text-red-600 text-sm">
            {{ errors.age }}
          </p>
        </div>

        <div class="md:text-end">
          <label for="partyName">Party Name (optional)</label>
        </div>
        <div>
          <input
            id="partyName"
            v-model="form.partyName"
            name="partyName"
            class="w-full p-2 rounded"
          />
        </div>
      </template>

      <!-- Conditional fields: Clubs -->
      <template v-if="form.enquiryType === 'Clubs'">
        <div class="md:text-end">
          <label for="school">School</label>
        </div>
        <div>
          <input
            id="school"
            v-model="form.school"
            name="school"
            class="w-full p-2 rounded"
          />
          <p v-if="touched && errors.school" class="text-red-600 text-sm">
            {{ errors.school }}
          </p>
        </div>

        <div class="md:text-end">
          <label for="yearGroup">Year Group</label>
        </div>
        <div>
          <input
            id="yearGroup"
            v-model="form.yearGroup"
            name="yearGroup"
            class="w-full p-2 rounded"
          />
          <p v-if="touched && errors.yearGroup" class="text-red-600 text-sm">
            {{ errors.yearGroup }}
          </p>
        </div>

        <div class="md:text-end">
          <label for="childName">Child’s Name</label>
        </div>
        <div>
          <input
            id="childName"
            v-model="form.childName"
            name="childName"
            class="w-full p-2 rounded"
          />
          <p v-if="touched && errors.childName" class="text-red-600 text-sm">
            {{ errors.childName }}
          </p>
        </div>
      </template>

      <!-- Message -->
      <div class="md:text-end">
        <label for="message">Message</label>
      </div>
      <div>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          rows="4"
          class="w-full p-2 rounded"
          placeholder="How can we help?"
        ></textarea>
        <p v-if="touched && errors.message" class="text-red-600 text-sm">
          {{ errors.message }}
        </p>
      </div>
    </div>

    <!-- Terms -->
    <div
      class="flex items-center justify-end mb-2 pt-12"
      :class="{ invalid: errors.agree }"
    >
      <label for="agree" class="select-none text-lg pr-4 cursor-pointer">
        I agree to AbsoluteSport contacting me in respect of my enquiry
      </label>
      <input
        id="agree"
        v-model="form.agree"
        name="agree"
        type="checkbox"
        class="h-6 w-6 rounded border-gray-400 accent-accent focus:ring-2 focus:ring-accent cursor-pointer"
      />
    </div>
    <p v-if="touched && errors.agree" class="text-red-600 text-sm">
      {{ errors.agree }}
    </p>

    <!-- Submit -->
    <div class="md:flex md:justify-end">
      <button
        type="submit"
        class="btn-accent my-4 w-full md:w-fit"
        :disabled="!isValid"
      >
        {{ submitted ? "Submitted" : "Send Message" }}
      </button>
    </div>

    <!-- Submission messages -->
    <div v-if="submitted" class="p-3 bg-green-100 text-green-700 rounded">
      Thanks! We’ve received your enquiry.
    </div>
    <div v-if="failed" class="p-3 bg-red-100 text-red-700 rounded">
      Something went wrong. Please try again.
    </div>
  </form>
</template>
