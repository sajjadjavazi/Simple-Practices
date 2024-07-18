function collectData() {
    const people = [];
    while (true) {
        const input = prompt("Please enter: Name, Age, Profile(yes/no), Salary");
        if (!input) break;

        const [name, age, hasProfilePic, salary] = input.split(',').map(item => item.trim());

        if (name && !isNaN(age) && (hasProfilePic === 'yes' || hasProfilePic === 'no') && !isNaN(salary)) {
            people.push({
                name: name,
                age: parseInt(age),
                hasProfilePic: hasProfilePic === 'yes',
                salary: parseFloat(salary)
            });
        } else {
            alert("ورودی نامعتبر. لطفا مجددا اطلاعات را به شکل صحیح وارد کنید.");
        }
    }

// نمایش نتایج داده های وارد شده -----> Console.log 

    if (people.length > 0) {
        // مرتب‌سازی بر اساس سن
        people.sort((a, b) => b.age - a.age);
        console.log("مرتب‌سازی بر اساس سن:", people);

        // یافتن فردی که بیشترین حقوق را دریافت می‌کند
        const highestPaidPerson = people.reduce((prev, current) => (prev.salary > current.salary) ? prev : current);
        console.log("فردی که بیشترین حقوق را دریافت می‌کند:", highestPaidPerson.name);

        // محاسبه میانگین حقوق
        const totalSalary = people.reduce((sum, person) => sum + person.salary, 0);
        const averageSalary = totalSalary / people.length;
        console.log("میانگین حقوق:", averageSalary);

        // بررسی اینکه آیا همه عکس پروفایل دارند یا خیر
        const allHaveProfilePic = people.every(person => person.hasProfilePic);
        console.log("آیا همه عکس پروفایل دارند؟", allHaveProfilePic ? "بله" : "خیر");
    } else {
        console.log("هیچ اطلاعاتی وارد نشده است.");
    }
}
