# Electricity Bill Calculator

This program calculates the electricity bill based on tiered consumption rates (kWh) plus a fixed service fee.

## Pseudocode (English)

```
START
    SET service_fee = 50.0
    INPUT units_used
    
    IF units_used < 0 THEN
        DISPLAY "Units cannot be negative"
    ELSE
        IF units_used <= 150 THEN
            total_cost = units_used * 3.50
        ELSE IF units_used <= 400 THEN
            total_cost = (150 * 3.50) + ((units_used - 150) * 4.20)
        ELSE
            total_cost = (150 * 3.50) + (250 * 4.20) + ((units_used - 400) * 5.00)
        END IF
        
        final_bill = total_cost + service_fee
        DISPLAY "Total electricity bill: " + final_bill
    END IF
END
```

---

## รหัสเทียม (ภาษาไทย)

```
เริ่มต้น
    กำหนด service_fee = 50.0
    รับค่า units_used (หน่วยการใช้งาน)
    
    ถ้า units_used < 0 ให้
        แสดงผล "หน่วยการใช้งานต้องไม่เป็นค่าลบ"
    มิฉะนั้น
        ถ้า units_used <= 150 ให้
            total_cost = units_used * 3.50
        ถ้า units_used <= 400 ให้
            total_cost = (150 * 3.50) + ((units_used - 150) * 4.20)
        มิฉะนั้น (มากกว่า 400 หน่วย)
            total_cost = (150 * 3.50) + (250 * 4.20) + ((units_used - 400) * 5.00)
        จบเงื่อนไข
        
        final_bill = total_cost + service_fee
        แสดงผล "ค่าไฟฟ้าทั้งหมด: " + final_bill
    จบเงื่อนไข
สิ้นสุด
```
